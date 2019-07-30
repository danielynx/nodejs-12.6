# Docker and NodeJS

NodeJS 12.6 template project to run development environment on docker swarm cluster.

![Docker and NodeJS](readme/docker-nodejs.png)

## 1. Environment configuration

### 1.1. Docker images
- node:12.6.0-alpine
- portainer
- traefik
  
### 1.2. Webserver:
- NodeJS: v12.6
- Npm: v6.9.0
- Yarn: v1.16.0

## 2. Get started

### 2.1. Create docker swarm cluster

First of all, you need discovery the IP address of your docker interface.

Then execute the follow command with the IP address that you meet.
```sh
sudo docker swarm init --advertise-addr <ip-address>
```

### 2.2. Deploy docker stack

Deploy `nodejs` stack, that contain the follow services: node_alpine, portainer/agent and traefik.

Execute the follow command:  
```sh
sudo environment/docker-stack-deploy.sh
```

### 2.3. Virtual Host

For config a local DNS, edit `/etc/hosts` file and put the follow lines:

```code
<ip-address>    portainer-dev.tech
<ip-address>    nodejs-dev.tech
<ip-address>    traefik-dev.tech
```

### 2.4. Test

- Portainer: [portainer-dev.tech:9000](http://portainer-dev.tech:9000)
- Traefik: [traefik-dev.tech:8080](http://traefik-dev.tech:8080)
- NodeJS: [nodejs-dev.tech](http://nodejs-dev.tech)