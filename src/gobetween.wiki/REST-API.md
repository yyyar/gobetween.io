### Table of Contents
- [Configuration](#introduction)
- [Errors](#errors)
- [General endpoints](#general)
- [Servers endpoints](#servers)

### Configuration
You can enable/disable and configure REST API port in gobetween config file in `[api]` section:
```toml
[api]
enabled = true  # true | false
bind = ":8888"  # bind host:port

  # uncomment to enable 
  #[api.basic_auth]   # (optional) Enable HTTP Basic Auth
  #login = "admin"    # HTTP Auth Login
  #password = "1111"  # HTTP Auth Password

  # uncomment to enable
  #[api.tls]                        # (optional) Enable HTTPS
  #cert_path = "/path/to/cert.pem"  # Path to certificate
  #key_path = "/path/to/key.pem"    # Path to key
```

### Errors
API responds with typical HTTP codes representing success of failure of the operation:
- 200 OK
- 400 Bad Request
- 409 Conflict
- 500 Internal Server Error

## REST API Specification

### General

#### `GET /` - System Information
Returns system information about gobetween process.
##### Response
```js
{
    "configuration": {
        "kind" : String
        // ...
        // kind-specific data
    },
    "pid": Integer,
    "startTime": String,
    "time": String,
    "uptime": Duration,
    "version": String
}
```

#### `GET /dump` - Dump Current Config to Response

##### Query Params
- format - "toml" (default) | "json"

##### Response
```
 # TOML or JSON formatted current config 
```


### Servers

#### `GET /servers/<name>` - Get Server By Name
##### Response
```js
{
   // server definition of the same structure and format as `[servers.<name>]` 
   // entry in config TOML file but JSON encoded.
}
```


#### `GET /servers` - List All Servers
##### Response
```js
{
    // Represents the same structure and format as `[servers]` entries in config TOML file.

    "<name>": {
        // server definition of the same structure and format as `[servers.<name>]` 
        // entry in config TOML file but JSON encoded.
    },

    // other servers

}
```

#### `POST /servers/<name>` - Create Server With Name `<name>`
##### Body
```js
{
   // server definition of the same structure and format as `[servers.<name>]` 
   // entry in config TOML file but JSON encoded.
}
```

#### `DELETE /servers/<name>` - Delete Server

#### `GET /servers/<name>/stats` - Get Server Statistics
##### Body
```js
{
    "active_connections": Integer,
    "rx_total": Integer,  // bytes
    "tx_total": Integer,  // bytes
    "rx_second": Integer, // bytes/second
    "tx_second": Integer, // bytes/second
    "backends": [
        {
            "host": String,
            "port": String,
            "priority": Integer,
            "weight": Integer,
            "stats": {
                "live": Boolean,
                "total_connections": Integer,
                "active_connections": Integer,
                "refused_connections": Integer,
                "rx": Integer,  // bytes
                "tx": Integer   // bytes
                "rx_second": Integer, // bytes/second
                "tx_second": Integer, // bytes/second
            }
        },

        // ... other backends ... 
    ]
}
```

