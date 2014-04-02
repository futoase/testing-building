testing application for building.
---------------------------------

Prerequired
-----------

- [building](https://github.com/CenturyLinkLabs/building)
- [homebrew](http://brew.sh/)

How to setup for the docker of using building?
----------------------------------------------

```
> gem install building --no-ri --no-rdoc
> brew bundle
> building test/node-app
> docker run -d -p 8080:8080 -e "PORT=8080" test/node-app
> VBoxManage controlvm "boot2docker-vm" natpf1 "test-port-of-httpd,tcp,127.0.0.1,8080,,8080" # port forwarding from docker container to host.
> open http://localhost:8080/
```

How to setup for the heroku?
----------------------------

```
> heroku create
> git push heroku master
> open http://{application-name}.herokuapp.com/
```

Author
------
This testing application, I referenced from the [http://www.centurylinklabs.com/heroku-on-docker/](http://www.centurylinklabs.com/heroku-on-docker/).
