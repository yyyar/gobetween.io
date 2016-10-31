## **Introduction**

This Article describe service Balancing with Gobetween and Consul . We use Docker and Registrator With Consul SRV Discovery service. As a Gobetween Discovery service.

Consul:
```bash
sever1.consul.example.com 10.0.0.11 bootstrap consul server , consul agent
sever2.consul.example.com 10.0.0.12 consul server , consul agent
sever2.consul.example.com 10.0.0.13 consul server , consul agent
```

Docker nodes :
```bash
server1.application1.example.com 10.0.1.11 application server1 Docker node1 with registrator service
server2.application2.example.com 10.0.1.12 application server2 Docker node2 with registrator service
server3.application3.example.com 10.0.1.13 application server3 Docker node3 with registrator service
```

Gobetween balancer:
```text
lb.exampe.com load balancer server will have 3 interfaces:
eth0 with wan address 55.55.55.55 , eth1 with 10.0.0.5 address and eth2 with 10.0.1.5 
```

## Consul cluster deployment

First of all need to install Consul on server(N).consul.example.com:

Download Consul package from https://consul.io 
```bash
#wget https://releases.hashicorp.com/consul/0.6.4/consul_0.6.4_linux_amd64.zip
#unzip *.zip
#mv consul /usr/sbin/consul
```

Test your consul binary
```bash
#consul --version
Consul v0.6.4
Consul Protocol: 3 (Understands back to: 1)

```

**After installation Consul on all servers let`s prepare consul cluster for initial start**


First оf all need to generate token for our cluster:

```bash
#consul keygen
ozgffIYeX6owI0215KWR5Q==
```

Add consul user:

```bash
#adduser consul
```

Creating consul configuration directorines:

```bash
#mkdir -p /etc/consul.d/{bootstrap,server,client}
```

Creating Consul Data directories :

```bash
#mkdir /var/consul
#chown consul:consul /var/consul
```

On bootstrap node (sever1.consul.example.com) need to create bootstrap config:

/etc/consul.d/bootstrap/config.json

```text
{
    "bootstrap": true,
    "server": true,
    "datacenter": "production",
    "data_dir": "/var/consul",
    "encrypt": "",
    "log_level": "INFO",
     "encrypt":ozgffIYeX6owI0215KWR5Q==,
    "enable_syslog": true
}
```



On all Сonsul servers need to create server config in /etc/consul.d/server/config.json:

Server1:
```text
{
    "bootstrap": false,
    "server": true,
    "datacenter": "production",
    "data_dir": "/var/consul",
    "encrypt": "ozgffIYeX6owI0215KWR5Q==",
    "log_level": "INFO",
    "enable_syslog": true,
    "start_join": ["10.0.0.12", "10.0.0.13"]
}
```

Server2
```text
{
    "bootstrap": false,
    "server": true,
    "datacenter": "production",
    "data_dir": "/var/consul",
    "encrypt": "ozgffIYeX6owI0215KWR5Q==",
    "log_level": "INFO",
    "enable_syslog": true,
    "start_join": ["10.0.0.11", "10.0.0.13"]
}
```

Server3:

```text
{
    "bootstrap": false,
    "server": true,
    "datacenter": "production",
    "data_dir": "/var/consul",
    "encrypt": "ozgffIYeX6owI0215KWR5Q==",
    "log_level": "INFO",
    "enable_syslog": true,
    "start_join": ["10.0.0.11", "10.0.0.12"]
}
```

Next we will create upstart script on all consul servers  :
 /etc/init/consul:
```init
description "Consul server process"

start on (local-filesystems and net-device-up IFACE=eth0)
stop on runlevel [!12345]

respawn

setuid consul
setgid consul

exec consul agent -config-dir /etc/consul.d/server

```

Bootstrap cluster :
On sever1.consul.example.com:
```bash
#consul agent -config-dir /etc/consul.d/bootstrap
```

The service should start up and occupy the terminal window. In bootstrap mode, this server will self-elect as leader, creating a basis for forming the cluster.

On another two servers (sever2.consul.example.com, sever3.consul.example.com) Simply run consul cluster

```bash
#start consul
```

These servers will connect to the bootstrapped server, completing the cluster. At this point, we have a cluster of three servers, two of which are operating normally, and one of which is in bootstrap mode, meaning that it can make executive decisions without consulting the other servers.

On bootstrap nod press
```text
CTRL-C
```

And re-start bootstrap node as usual node :

sever1.consul.example.com:
```bash
#consul start
```

Test Consul cluster with command:
```bash
#consul members -rpc-addr=10.0.0.11:8400

Output should be:
Node           Address          Status  Type    Build  Protocol  DC
server1.consul.example.com  10.0.0.11:8301  alive   server  0.6.4  2        production
server2.consul.example.com  10.0.0.12:8301  alive   server  0.6.4  2        production
server3.consul.example.com  10.0.0.13:8301  alive   server  0.6.4  2        production
```

So, our cluster  up and running


##Servers preparation  for application servers start 

We need run docker containers on our Application servers nodes:
For this it needs to  install docker on all  application servers:
```text
server1.application1.example.com 

server2.application2.example.com 

server3.application3.example.com 
```

###Installing docker :

```bash
# sudo apt-get update

# sudo apt-get install apt-transport-https ca-certificates

#sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

#echo “deb https://apt.dockerproject.org/repo ubuntu-trusty main” > /etc/apt/sources.list.d/docker.list

#sudo apt-get update

#sudo apt-get purge lxc-docker

#apt-cache policy docker-engine

#sudo apt-get update

#sudo apt-get install linux-image-extra-$(uname -r)

#apt-get install apparmor

#sudo apt-get install docker-engine

#sudo docker run hello-world
```

###Installing Registrator :

Simply run container with registrator on each docker node 
```docker
docker run -d \
    --name=registrator \
    --net=host \
    --volume=/var/run/docker.sock:/tmp/docker.sock \
    gliderlabs/registrator:latest \
      consul://10.0.1.5:8500
```

Now we are ready for running application containers

###Prepare and start mock services  containers

For testing needs we will run nginx default containers :

Lets`s create simple html file to be able recognize  difference between servers and services during proxy testing.

For this need to create  /tmp/test.html file on docker host maschine. Add ip address and service name into it. 

For  server1.application1.example.com  it will seems like:

/tmp/test/test_service.html
~~~
  Server1.application1.example.com service1
~~~
/tmp/test2/test_service.html
~~~
  Server1.application1.example.com service2
~~~

For  server2.application1.example.com  it will seems like:

/tmp/test/test_service.html
~~~
  Server2.application1.example.com service1
~~~
/tmp/test2/test_service.html
~~~
  Server2.application1.example.com service2
~~~

For  server3.application1.example.com  it will seems like:

/tmp/test/test_service.html
~~~
  Server3.application1.example.com service1
~~~
/tmp/test2/test_service.html
~~~
  Server3.application1.example.com service2
~~~

Next we will use nginx default container as a test service containers

Create two containers on each docker node :

Server1.application1.example.com:
```bash
docker run -l proxied=true -d -p 22001:80 -e "SERVICE_80_NAME=service1" -v /tmp/test:/usr/share/nginx/html:ro nginx

docker run -l proxied=true -d -p 23001:80 -e "SERVICE_80_NAME=service2" -v /tmp/test2:/usr/share/nginx/html:ro nginx
```

Server2.application1.example.com
```bash
docker run -l proxied=true -d -p 22002:80 -e "SERVICE_80_NAME=service1" -v /tmp/test:/usr/share/nginx/html:ro nginx

docker run -l proxied=true -d -p 23002:80 -e "SERVICE_80_NAME=service2" -v /tmp/test2:/usr/share/nginx/html:ro nginx
```
Server3.application1.example.com
```bash
docker run -l proxied=true -d -p 22003:80 -e "SERVICE_80_NAME=service1" -v /tmp/test:/usr/share/nginx/html:ro nginx

docker run -l proxied=true -d -p 23003:80 -e "SERVICE_80_NAME=service2" -v /tmp/test2:/usr/share/nginx/html:ro nginx
```


We have consul cluster , registrator , docker nodes with mock services, so we are ready to deploy load balancer with service discovery.

##Gobetween Service LB installation and configuration

Download gobetween latest release from github:

[https://github.com/yyyar/gobetween/releases](Gobetween releases page)

```bash
#wget https://github.com/yyyar/gobetween/releases/download/0.1.0/gobetween_0.1.0.dev_linux_amd64.tar.gz
#tar -zxvf gobetween_0.1.0.dev_linux_amd64.tar.gz gobetween
```

Copy binary to /usr/sbin/
```bash
#cp gobetween /usr/sbin/
```
Also download init script:
```bash
#wget https://github.com/yyyar/gobetween/blob/master/config/init/gobetween.conf
```
Next need to place it into /etc/init/ directory 

And let`s create config for our service discovery cases and also for consul cluster.

For consul cluster config will looks like:

```toml
[servers.sample]
bind = "10.0.1.5:8500"
protocol = "tcp" 
balance = "roundrobin"

max_connections = 100
client_idle_timeout = "10m"
backend_idle_timeout = "10m"
backend_connection_timeout = "5s"

    [servers.sample.discovery]
    kind = "static"
    static_list = [
      "10.0.0.11:8500 weight=1",
      "10.0.0.12:8500 weight=1",
      "10.0.0.13:8500 weight=1"
    ]

    [servers.sample.healthcheck]
    fails = 1                      
    passes = 1
    interval = "2s"   
    timeout="1s"             
    kind = "ping"
    ping_timeout_duration = "500ms"
```


let`s build service discovery based on this configuration :
This example query consul DNS server on 10.0.0.11 (GOBETWEEN currently not supported UDP balancing so we will use single servers query) consul node for service1 and service2 list with external ports

```toml
[servers.sample2]
bind = "55.55.55.55:2000"
protocol = "tcp"
balance = "weight"

  [servers.sample2.discovery]
  failpolicy = "keeplast"
  kind = "srv"
  srv_lookup_server = "10.0.0.11:8600" # dns server and port
  srv_lookup_pattern = "service1.service.production.consul." # SRV service pattern 

  [servers.sample2.healthcheck]
  fails = 1                      
  passes = 1
  interval = "2s"                
  kind = "ping"
  timeout = "500ms"


[servers.sample3]
bind = "55.55.55.55:2001"
protocol = "tcp"
balance = "weight"

  [servers.sample3.discovery]
  failpolicy = "keeplast"
  kind = "srv"
  srv_lookup_server = "10.0.0.11:8600" # dns server and port
  srv_lookup_pattern = "service2.service.production.consul." # SRV service pattern 

  [servers.sample3.healthcheck]
  fails = 1                      
  passes = 1
  interval = "2s"                
  kind = "ping"
  timeout = "500ms"

```


Let`s start Gobetween
```bash
#start gobetween
```

##Discovery test

Check consul dns 
```bash
#dig @10.0.0.11 -p 8600  service1.service.production.consul SRV

 <<>> DiG 9.9.5-3ubuntu0.6-Ubuntu <<>> @10.0.0.11 -p 8600 service1.service.production.consul SRV
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 1820
;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;service1.service.production.consul.	IN	SRV

;; ANSWER SECTION:
service1.service.production.consul.	0 IN	SRV	1 1 22001 server1.application1.example.com.node.production.consul.
service1.service.production.consul.	0 IN	SRV	1 1 22002 server2.application1.example.com.node.production.consul.
service1.service.production.consul.	0 IN	SRV	1 1 22002 server3.application1.example.com.node.production.consul.

;; ADDITIONAL SECTION:
server1.application1.example.com.node.production.consul. 0 IN A	10.0.1.11
server2.application1.example.com.node.production.consul. 0 IN A	10.0.1.12
server3.application1.example.com.node.production.consul. 0 IN A	10.0.1.13
```


```bash
#dig @10.0.0.11 -p 8600  service2.service.production.consul SRV

Output shold be like:

 <<>> DiG 9.9.5-3ubuntu0.6-Ubuntu <<>> @10.0.0.11 -p 8600 service1.service.production.consul SRV
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 1820
;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;service2.service.production.consul.	IN	SRV

;; ANSWER SECTION:
service2.service.production.consul.	0 IN	SRV	1 1 23001 server1.application1.example.com.node.production.consul.
service2.service.production.consul.	0 IN	SRV	1 1 23002 server2.application1.example.com.node.production.consul.
service2.service.production.consul.	0 IN	SRV	1 1 23002 server3.application1.example.com.node.production.consul.

;; ADDITIONAL SECTION:
server1.application1.example.com.node.production.consul. 0 IN A	10.0.1.11
server2.application1.example.com.node.production.consul. 0 IN A	10.0.1.12
server3.application1.example.com.node.production.consul. 0 IN A	10.0.1.13

```


##Service discovery balancing test

If so - that mean that registrators on all nodes successfully register services in consul cluster.


And we ready to test our services:
Check 55.55.55.55:2000 and 55.55.55.55:2000 
Output will be like:

```bash
#curl -s http://55.55.55.55:2000/test_service.html
Server1.application1.example.com service1
##curl -s http://55.55.55.55:2000/test_service.html
Server2.application1.example.com service1
#curl -s http://55.55.55.55:2000/test_service.html
Server3.application1.example.com service1
Etc…
#curl -s http://55.55.55.55:2001/test_service.html
Server1.application1.example.com service2
##curl -s http://55.55.55.55:2001/test_service.html
Server2.application1.example.com service2
#curl -s http://55.55.55.55:2001/test_service.html
Server3.application1.example.com service2
```

Try to stop few containers and check that it will be disappeared from consul dns as well as from gobetween discovery.
