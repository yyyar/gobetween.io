Balancing strategy is a way _gobetween_ select backends (from discovery backends pool)  for new client connection. It's defined in `balance` property within `[servers.<name>]`, and is `weight` by default.

##### `weight`
Select backend from discovery pool with probability based on backends weights.
For example, for backends pool:
```json
[
    "host1 weight=1"
    "host2 weight=2"
]
```
host1 will be selected with probability 75%, and host2 will be selected in 25% cases.

If weight for all backends are the same, backend will be selected randomly.

##### `iphash`
Target backend will be calculated using hash function of client ip address mod backends count. Note if backends pool changes (for example, due discovery), client may be proxied to a different backend.

##### `leastconn`
_gobetween_ will select backends with least connections to it.

##### `roundrobin`
It's most simple balancing strategy, and each new connection will be proxies to next backend in the backends pool successively.

##### `leastbandwidth` 
_(since 0.3.0)_
Backends with least sum of rx/tx per second traffic will be selected for next request. Note that rx/tx per second values are calculated with 2 seconds interval so changes in bandwidth won't be instantly applied.