## Configuration location
_(since v0.3.0)_

There are several options where gobetween could pull it's configuration on startup.

### file
`$ gobetween from-file /path/to/gobetween.toml`

### http
`$ gobetween from-url http://some.url/gobetween.toml`

### consul kv
`$ gobetween from-consul localhost:8500 --key=gobetween --scheme=http -f json`

## Configuration format
gobetween could be configured with TOML or JSON (these formats map 1-to-1 to each other).
You can specify format with --format (-f) option, for exaple:

`$ gobetween from-url http://some.url/gobetween.toml -f toml`

`$ gobetween from-url http://some.url/gobetween.json -f json`

## Passing arguments in ENV variable
It's possible to pass command-line args via GOBETWEEN environment variable (containing json array of arguments) instead as typical args. It may be useful for containerization when you store application parameters in env and don't want to change command line.

So instead
 
`$ gobetween from-url http://some.url/gobetween.toml -f toml`

You can use the following syntax:
```
$ GOBETWEEN='["from-url", "http://some.url/gobetween.toml", "-f", "toml"]'
$ gobetween
```


