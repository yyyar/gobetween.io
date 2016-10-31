_**(since 0.3.0)**_

Access control support all subnets from IPv6 and IPv4 pool.

To enable access control need to add  [servers.servername.access] section into config file or add it via [REST API](https://github.com/yyyar/gobetween/wiki/REST-API)

###Policy

Access control section can be defined with or without default policy : 
```
default = "deny" | "allow"
```

Allow policy is mean that all traffic pass to selected server .
Deny policy is opposite and reject all traffic point to selected servers.

###Rules

Rules section needs to be defined to list rules applied over default policy.
Rules are checking from top and down the list. First rule match meant check stops and rule apply.
 ```
rules = [
    "allow 127.0.0.1",
    "deny 192.168.1.0/24",
    "allow 192.168.0.0/16",
    "allow 10.0.0.0/16",
   ] 
```

In shown case  packets came from 192.168.1.0/24 will be rejected despite the fact that they are included in the subset of subnets listed in next line 192.168.0.0/16. All other packets from 192.168.0.0/16 subnet will be passed .


full example:

```toml
[servers.servername.access]
default = "deny"
rules = [
    "allow 127.0.0.1",
    "deny 192.168.1.0/24",
    "allow 192.168.0.0/16",
    "allow 10.0.0.0/16",
   ] 
```