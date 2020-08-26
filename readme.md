<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

# Example of NestJs & MQTTJs integration simplified.
  
## Description
This example built on 
1. [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
2. [MqttJs](https://www.npmjs.com/package/mqtt)

This example is also built on top of 
1. [Nest-Mqtt](https://github.com/microud/nest-mqtt)'s example. Simplified some of the code to serve my less complex use case.
2. Similar architecture based on [Rajesh's](https://github.com/rajeshkumarbehura) [ts-nestjs-kafka](https://github.com/rajeshkumarbehura/ts-nestjs-kafka) repo.

It integrates with mqtt and simplified to subscribe and publish message to mqtt topics.

## Installation

```bash
$ yarn install
```

## Running the app

#### Step- 1 
Make sure docker & docker-compose is installed. 

```
# Run mqtt server in local machine, go to docker folder 
$ docker-compose -f mqtt.yml up
```

#### Step- 2
 Run the application
```bash
# development
$ yarn start

```

#### Step- 3
Send message to MQTT & receive message by consumer testing.
1.  http://localhost:8000/send/consumer   - send a sample message to mqtt & consumer receives and print in application log

When you call above api, application console log will print " [MQTT-CONSUMER] ...." .



## License
Nest is [MIT licensed](LICENSE).