For example, we need to balance three nodes/backends. 
 
![](http://i.piccy.info/i9/4f0b4f9b1a5ba56b6a0559a17d611c5b/1465913152/19993/1043487/simple.png)

We need to define our first gobetween server: 

```toml
[servers.sample]
bind = "100.100.1.5:3000"
protocol = "tcp"
balance = "weight"

max_connections = 10000
client_idle_timeout = "10m"
backend_idle_timeout = "10m"
backend_connection_timeout = "2s"

[servers.sample.discovery]
kind = "static"
static_list = [
    "10.0.0.2:22399 weight=5",
    "10.0.0.3:22499 weight=3",
    "10.0.0.5:32399 weight=1"
]
```

And it needs to define health check method  in our sample it is tcp ping method. It means that each period of time defined in “interval” gobetween trying to open test session to each backend node from list and based on check success|fail mark node healthy or failed after N fails defined in “fails” variable , and restore it after T success checks defined in “passes” variable and if so - exclude it  balancing list or include it  again.  

```toml
[servers.sample.healthcheck]
fails = 1                      
passes = 1
interval = "2s"                
kind = "ping"
ping_timeout_duration = "500ms"
```

Final version of our config will be:
```toml

[servers.sample]
bind = "localhost:3000"
protocol = "tcp" 
balance = "roundrobin"

max_connections = 10000
client_idle_timeout = "10m"
backend_idle_timeout = "10m"
backend_connection_timeout = "2s"
 
    [servers.sample.discovery]
    kind = "static"
    static_list = [
      "10.0.0.2:22399 weight=5",
      "10.0.0.3:22499 weight=3",
      "10.0.0.5:32399 weight=1"
    ]

    [servers.sample.healthcheck]
    fails = 1                      
    passes = 1
    interval = "2s"   
    timeout="1s"             
    kind = "ping"
    ping_timeout_duration = "500ms"
```
