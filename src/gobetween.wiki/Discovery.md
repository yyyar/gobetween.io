Service discovery solves the problem of automatic determining locations of service instances. There are two major types of service discovery: client-side discovery and server-side discovery. _gobetween_ has build-in [server-side discovery](http://microservices.io/patterns/server-side-discovery.html) and acts as a router that can have static configuration, or query different kinds of "service registries", depending on how it's configured.

Currently _gobetween_ supports the following discovery types used for building backends pool for the server:

- [static](#static)
- [srv](#src)
- [docker](#docker)
- [json](#json)
- [plaintext](#plaintext)
- [exec](#exec)
- [consul](#consul)

Discovery is defined in `[servers.<name>.discovery]` section in `kind` property.

There are some common properties for each discovery type (expect static):
```toml
kind = "<kind>"         # (required)
failpolicy = "keeplast" # (optional) "keeplast" | "setempty" - what to do with backends if discovery fails
interval = "0s"         # (required) backends cache invalidation interval; 0 means never.
timeout = "5s"          # (optional) max time to wait for discover until falling to failpolicy
```

### static
It's a simplest way to build load balancer backends. In this case actually no discovery is happened and backends list are static and managed only by health checks. `static_list` can contain as many backends as needed.

![](http://i.piccy.info/i9/4f0b4f9b1a5ba56b6a0559a17d611c5b/1465913152/19993/1043487/simple.png)

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "static"
  static_list = [
    "localhost:8000 weight=5",  # "host:port weight=N priority=M", weight and priority are optional
    "localhost:8001"            # and = 1 by default
  ]
```

### srv
This discovery method uses DNS lookup to build backends list. gobetween will query DNS server defined in `srv_lookup_server` property and filter services using pattern defined in `srv_lookup_server`. You can use any custom DNS server or [Consul DNS](https://www.consul.io/docs/agent/dns.html).

![](http://i.piccy.info/i9/c1ab436d6c65f957c29ff26d3ca7cc17/1465913811/28400/1043487/srv.png)

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "srv"
  srv_lookup_server = "some.server:53"
  srv_lookup_pattern = "some.service."
  srv_dns_protocol = "udp"  # (since v0.2.0) - protocol to use for dns lookup: udp | tcp
```

### docker
Docker discovery can work both with stand-alone [Docker](http://docker.com) server or with [Docker Swarm](https://docs.docker.com/swarm/). _gobetween_ will call Docker / Swarm API endpoint defined in `docker_endpoint` to build backends list. It may be HTTP endpoint (like `http://0.0.0.0:2375`) or Unix socket (`unix:///var/run/docker.sock`). To select only needed containers you can set `docker_container_label` property and containers will be filtered based on provided [container label](https://docs.docker.com/engine/userguide/labels-custom-metadata/#container-labels) and label value. You should also set `docker_container_private_port` so gobetween will use corresponding container public port while adding it to backends list.

![](http://i.piccy.info/i9/7de5f9db763a40849bb885d34a4fdeaa/1465914526/71950/1043487/docker.png)

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "docker"
  docker_endpoint = "http://localhost:2375" # (required) Endpoint to docker API
  docker_container_label = "proxied=true"   # (optional) Label to filter containers
  docker_container_private_port = 80        # (required) Private port of container to use
  docker_container_host_env_var = ""        # (optional) (since v0.2.0) Take container host from container env variable
```
     
### json         
JSON discovery is useful for custom setups when you have your own service registry implementation that can provide backends list in JSON format. _gobetween_ will make HTTP query to `json_endpoint`, expecting valid JSON in response, parse it and build backends list. By defaults JSON should have the following format:

```js
[ 
  {"host": "0.0.0.0", "port": "1231", "weight": 1, "priority": 1},
  {"host": "1.1.1.1", "port": "1232", "weight": 2, "priority": 1},
  ...
]
```

But it may be overridden to fit your custom JSON structure.

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "json"
  json_endpoint = "http://localhost:8080"  # (required) JSON discovery Url
  json_host_pattern = "some.level.host"    # (optional) path to host value in JSON object, by default "host"
  json_port_pattern = "some.level.port"    # (optional) path to port value in JSON object, by default "port"
  json_weight_pattern = "some.level.weight" # (optional) path to weight in JSON object, by default "weight"
  json_priority_pattern = "some.level.priority" # (optional) path to priority in JSON object, by default "priority"
```

### plaintext
This is even simpler way to integrate custom discovery registries. Line in json discovery, _gobetween_ will query `plaintext_endpoint` to get newline separated list of nodes in plain text format. Then it will be parsed using regexps line-by-line (one backend in line).A ll necessary values like host, port, etc will captured from named regexp groups. By default regexp plain discovery use 

```regex
(?P<host>\S+):(?P<port>\d+)(\sweight=(?P<weight>\d+))?(\spriority=(?P<priority>\d+))
```

So you can use parse the following responses by default: 

```
0.0.0.0:1234 weight=0, priority=1
0.0.0.0:4321 weight=1 priority=0
```

You can override regexp used to capture values using `plaintext_regex_pattern` property, keeping in mind groups names:
* `(?P<host>...)`
* `(?P<port>...)`
* `(?P<weight>...)`
* `(?P<priority>...)`

All another captured groups will be ignored. 

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "plaintext"
  plaintext_endpoint = "http://some.url.com"   # (required) Url to plain text discovery
  plaintext_regex_pattern = ""                 # (optional) Regex with named capturing groups
```


### exec
This is most powerful discovery method. In this case backends list will be parser from the stdout of arbitrary script / program. _gobetween_ will execute `exec_command` (first element is full path to the program, all others are optional arguments. Expected output of the script should be in the following format:
```
host1:port1 weight=N
host2:port2 weight=M
```
Weight is optional. Lines should be separated by newline (\n). 

Here is an example of script `/path/to/script.sh`:
```bash
#!/usr/bin/env bash

echo localhost:8000 weight=1
echo localhost:8001 weight=2
```

_gobetween_ process should have execute permission to the script.

```toml
[servers.example]

# ...

  [servers.example.discovery]
  kind = "exec"
  exec_command = ["/path/to/script.sh", "arg1", "arg2"] # (required) command to exec and variable-length arguments
```

### consul 
_(since v0.3.0)_
Consul discovery uses Consul API to retrieve list of backends. If you're relying on Consul healthchecks and using `consul_service_passing_only = true` if makes sense to turn off gobetween healthchecks.

```toml
[servers.example]

# ...

  [servers.example.discovery]
  consul_host = "localhost:8500"       # (required) Consul host:port
  consul_service_name = "myservice"    # (required) Service name
  consul_service_tag = ""              # (optional) Service tag
  consul_service_passing_only = true   # (optional) Get only services with passing healthchecks

  consul_tls_enabled = false                    # (optional) enable client tls auth
  consul_tls_cert_path = "/path/to/cert.pem"
  consul_tls_key_path = "/path/to/key.pem"
  consul_tls_cacert_path = "/path/to/cacert.pem"
```