![](http://i.piccy.info/i9/c1ab436d6c65f957c29ff26d3ca7cc17/1465913811/28400/1043487/srv.png)

We have unlimited quantity of docker containers on unknown docker nodes quantity .
On docker nodes we have registrator service.
And yes : zookeeper+skydns or consul+registrator with native dns at the top of docker nodes.

Sooooo - let's start balancing:
In this example we defined discovery type “srv” . Also we need to define dns server and port which will be our service discovery source. Also we need to define a service name pattern and request frequency. When all done end configured properly we will have a backend node list refreshed each N seconds . During this N seconds node health checked by healthshecks. If node disappeared(appeared) from dns - it was removed/added to backend nodes list. Actually nodes list was synced with SRV record. But healthcheck status for node does not changed. It means that if srv record contain node that actually failed - it will stay marked as failed after SRV list refresh. 
One more important thing.  If in some reasons srv discovey failed (does not return correct response from dns server ) we may define what it needs to do with server backend nodes. If you need faile tolerance backend resistant to dns server failures add failpolicy = "keeplast" and tour backend stay same as last correct response from dns server.  In different situation - if you need consistency in all cases and it needs to be consistent more then return any non failed response -  add failpolicy = "setempty" and your node lists will be cleared and all requests to this server will be rejected

```toml
[servers.sample2]
bind = "localhost:3001"
protocol = "tcp"
balance = "weight"

  [servers.sample2.discovery]
  failpolicy = "keeplast"
  kind = "srv"
  srv_lookup_server = "66.66.66.66:8600" # dns server and port
  srv_lookup_pattern = "api.service.ireland.consul." # SRV service pattern 

  [servers.sample2.healthcheck]
  fails = 1                      
  passes = 1
  interval = "2s"                
  kind = "ping"
  timeout = "500ms" 
```

We have ready to go solution. You can use leastconn, or iphash as you wish.
