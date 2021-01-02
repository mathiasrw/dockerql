# Set up access to Dockerhub

Edit your ```.registry.json``` file and add an entry for an instance of dockerhub: 

~~~json
{
  "default-registry": {registryName},
  "registries": [
    {
      "name": {registryName},
      "type": "dockerhub",
      "namespace": {namespace},
      "username": {username},
      "password": {password}
    }
  ]
}
~~~

* {registryName} is an arbitrary name you choose to represent the registry. The name must be unique in the config file. 
* {namespace} optional parameter. Mapped to dockerhub "organization". 