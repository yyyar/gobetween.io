

![](http://i.piccy.info/i9/c80788698d935682172e3d54a39b1a3d/1465302438/18505/1041433/10_MIN_test.png)

![](http://i.piccy.info/i9/885ae1fb49e098db523dac844bb14444/1465302487/18985/1041433/10_min_traffic_values.png)

Test environment :
 
          8 core 16 thread Intel(R) Xeon(R) CPU  L5630  @ 2.13GHz

Test tool : [WRK](https://github.com/wg/wrk)

Test rperformed with command:

    wrk -c10000 -d600 -t8 http://$IP:80/index.html


As a backends we using 3 docker containers with Nginx with static page.

     user  nginx;
     worker_processes  4;
     error_log  /var/log/nginx/error.log warn;
     pid        /var/run/nginx.pid;
     events {
     worker_connections  4096;
     }
     http {
     include       /etc/nginx/mime.types;
     default_type  application/octet-stream;
     log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"'; 
     access_log  /var/log/nginx/access.log  main; 
     sendfile        on;
     keepalive_timeout  65;
     include /etc/nginx/conf.d/*.conf;
     }


Testing was done with Gobetween  ,  Haproxy  1.6 and Nginx 1.11.1 
Gobetween config :

    [logging]
    level = "info" 
    output = "stdout" 
    [globals]
    [defaults] 
    max_connections = 0
    client_idle_timeout = "30s"
    backend_idle_timeout = "30s"
    backend_connection_timeout = "30s"
    [servers]

    [servers.sample3]
    bind = «$ip:80"
    protocol = "tcp"
    balance = "weight"
    [servers.sample3.healthcheck]
    timeout = "5s"
    kind = "exec"
    interval = "7s"
    exec_command = "./exec_healthcheck.sh"
    exec_expected_positive_output = "1"
    exec_expected_negative_output = "0"
    exec_expected_output = "1"
    exec_timeout_duration = "2s"

    [servers.sample3.discovery]
    kind = "docker"
    docker_endpoint = "http://127.0.0.1:2375"
    docker_container_label = "proxied=true"
    docker_container_private_port = 80
    docker_cache_ttl = "20s"


HAPROXY Config :

    global
    log 127.0.0.1 local0 notice
    maxconn 200000
    user haproxy
    group haproxy
    defaults
    log     global
    mode    http
    option  httplog
    option  dontlognull
    retries 3
    option redispatch
    timeout connect  5000
    timeout client  10000
    timeout server  10000

    listen appname $ip:80
    maxconn 200000
    mode http
    stats enable
    stats uri /haproxy?stats
    stats realm Strictly\ Private
    stats auth A_Username:YourPassword
    stats auth Another_User:passwd
    balance roundrobin
    option httpclose
    option forwardfor
    server lamp1 172.17.0.2:80 check
    server lamp2 172.17.0.3:80 check
    server lamp3 172.17.0.4:80 check

Nginx LB config
 
    user nginx nginx;
    worker_processes 8;
    error_log /var/log/nginx/error_log info;
    events {
    worker_connections 4096;
    use epoll;
    }
    stream {
    upstream backend {
    server 172.17.0.2:80 weight=1;
    server 172.17.0.3:80 weight=5;
    server 172.17.0.4:80 weight=5;
    }
    server {
    listen 82;
    proxy_pass backend;
    }
    }



