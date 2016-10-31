- [Linux Binary](#linux-binary)
- [Linux From Sources](#linux-from-sources)
- [Docker](#docker)
- [Windows Binary](#windows-binary)

## Linux Binary

### Download latest version
#### for x86
```bash
$ curl -s https://api.github.com/repos/yyyar/gobetween/releases | grep browser_download_url | grep linux_386 | cut -d '"' -f 4 | wget -i -
```
#### for amd64
```bash
$ curl -s https://api.github.com/repos/yyyar/gobetween/releases | grep browser_download_url | grep linux_amd64 | cut -d '"' -f 4 | wget -i -
```

### Unzip
```bash
$ tar -zxvf *.tar.gz
$ cd gobetween*
```

### Configure
```bash
vim config/gobetween.toml
```

### Run
```bash
$ sudo gobetween -c config/gobetween.toml
```

## Linux from sources
### Install
```bash
$ git clone git@github.com:yyyar/gobetween.git
$ make
$ sudo -E make install
$ vim /etc/gobetween.toml
$ gobetween -c /etc/gobetween.toml
```

### Uninstall
```bash
sudo make uninstall
```

## Docker

Pull image from public Docker Hub
```bash
$ docker pull yyyar/gobetween
```

Specify port mappings (80 docker host port to 80 container port ) and place `gobetween.toml` to `/path/to/gobetween.toml`

```bash
$ docker run -p 80:80 -v /path/to/conf/gobetween.toml:/etc/gobetween/conf/:rw yyyar/gobetween
```

## Windows Binary
```
c:\path\to\gobetween -c c:\path\to\gobetween.toml
```