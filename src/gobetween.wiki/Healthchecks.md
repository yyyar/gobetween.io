Healthchecks are used for determine service status of backend nodes pool.
If discovery return only a nodes list and there are no healthchecks on discovery service side it needs to use
mechanism to determine service real status (failed or ok ). In this case healthchecks can be used.
There are two different type of healthchecks in gobetween.

**Healthchecks are optional since 0.2 release.** 

If there are no healthcheck server section defined - backend nodes marked as "ok" and can be deleted from backend according to discovery rules  and intervals

### ping
This is a simple healthcheck. It is simple sheck connection to backend nodes by initiate new connection from gobetween side to each backend node from discovery list. In case of  connection created successfully - check passed. This is a simple mechanism. Checks success are  only  mean that connection created . No data verification made during this checks.

Example of ping healthcheck:
```toml
[servers.default.healthcheck]
kind = "ping"
interval = "2s"
ping_timeout_duration = "500ms"
```

### exec
This is a more complicated healthcheck type. During Gobetween development we made a decision provide users a flexible mechanism to create own healthchecks. No one except end user know how exactly check service status of nodes in discovery pools. There are uncountable quantity of usage cases and services. Anyone can create it's own script and call it as healthcheck. Script execute by gobetween with arguments: `/path/to/script [ip] [port]` output of script to stdout should be `1` if check passed successfully and `0` if failed by default (may be overriden).  

Example of exec healthcheck:
```toml
[servers.default.healthcheck] 
kind = "exec"
interval = "2s"  
exec_command = "/usr/share/exec_healthcheck.sh"  # (required) command to execute
exec_expected_positive_output = "1"           # (required) expected output of command in case of success
exec_expected_negative_output = "0"           # (required) expected output of command in case of failure
exec_timeout_duration = "1s"                  # (required) max time for script to execute until mark as failed
```

### Examples
Please note that in all operating systems healthcheck response should not contain newline after output result.

#### Windows 
healthcheck.bat
```
@ECHO OFF
echo|set /p Dummy=1
```


#### Linux (Actually any Unix family)
healthcheck.sh
```bash
#!/usr/bin/env bash
echo -n 1 ;
```
