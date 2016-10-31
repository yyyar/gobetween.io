![](https://github.com/yyyar/gobetween/blob/master/logo.png?raw=true)

Long time all of us used and using "traditional" load balancers / proxies like [nginx](https://www.nginx.com/), [haproxy](http://www.haproxy.org/), and others.

But in modern world balancing become more end more flexible because of environment changes are made more often. Nodes behind load balancer are spawning and disappear according to load and/or other requirements. Auto scaling and containerization became almost a "silver bullet" in modern IT infrastructure architectures.

In the IP-telephony world DNS SRV records are main mechanism to find out nearest and less loaded call router.

Same situation is in modern microservices world, but unfortunately, there are almost no lb / proxy that have flexible and complete _automatic discovery_ feature. There are lot's of tricks and workarounds like [this](https://www.airpair.com/scalable-architecture-with-docker-consul-and-nginx).

__gobetween__ aiming fill this gap and provide fast, flexible and full-featured solution for load balancing for modern microservice architectures.  