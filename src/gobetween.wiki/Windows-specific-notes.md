Windows version config have few things should be noted to prepare proper config file.
Exec discovery path an  exec healthcheck path should be added with single quotes. 

# Linux 
```toml
exec_command = "/etc/gobetween/healthchecks/exec_healthcheck.sh"
exec_command = ["/etc/gobetween/scripts/discovery/exec_discovery.sh", "arg1", "arg2"]
```

# Windows 
```toml
 exec_command = 'C:\gobetween\scripts\healthchecks\exec_healthcheck.bat'
 exec_command = ['C:\gobetween\scripts\discovery\exec_discovery.bat', 'arg1', 'arg2']
```