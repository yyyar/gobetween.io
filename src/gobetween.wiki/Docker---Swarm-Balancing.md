Docker containers direct discovery is simple with gobetween . Simply run containers with selected label (you may separate containers with same internal port , but with different service type by different labels)

![](http://i.piccy.info/i9/7de5f9db763a40849bb885d34a4fdeaa/1465914526/71950/1043487/docker.png)

In this article we will discover services and  balance docker containers directly with docker(or swarm) API.
For this we need to define discovery  type as  “Docker”.  Also need to define docker host(ip) and port or swarm manage host(ip) and port . Service discovery in this cases works via containers labels. In this cases label will be "api=true" . All containers  from swarm cluster( or from docker host) marked with this label  will be balanced by gobetween. In balancing pool will be added all containers that are in “active” state and marked with defined label. Also it takes only containers with selected in “docker_container_private_port”  internal port enabled.

Also in this example  we will use more complicated healthcheck. It named exec . Main idea - you know what you need to check , you may write your own script , gobetween send IP(arg1) and port(arg2) of node that need to be checked in this way : script.sh arg1 arg2  and it should return 1 if success and 0 if fail in stdout. In exec_timeout_duration variable you need to specify script max execution time. If during this time script does not return expected output check marked as failed. 

**IMPORTANT** “timeout”  value should be less then check “interval” value.

```toml
[servers.sample3]
bind = "localhost:3002"
protocol = "tcp"
balance = "weight"
    
  [servers.sample3.discovery]
    interval = "10s"
    timeout = "2s"
    kind = "docker"
    docker_endpoint = "http://localhost:2375"  # Docker / Swarm API    
    docker_container_label = "api=true"  # label to filter containers
    docker_container_private_port = 80   # gobetween will take public container port for this private port

  [servers.sample3.healthcheck]
    fails = 1                      
    passes = 1
    interval = "2s"   
    timeout = "1s"             
    kind = "ping"
```