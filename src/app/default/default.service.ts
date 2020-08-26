import { Injectable } from '@nestjs/common';
import {MqttPayload} from "../../common/mqtt/mqtt.message";
import {MqttService} from "../../common/mqtt/mqtt.service";
import {HELLO_TOPIC} from "../../common/constants";

@Injectable()
export class DefaultService {
    constructor(private readonly mqttService: MqttService) {}

    getHello() {
        return {
            value: 'hello world',
        };
    }

    async send() {
        const message = {
            value: 'Message send to MQTT Topic',
        };
        const payload: MqttPayload = {
            requestId: '' + new Date().valueOf(),
            body: message,
            messageType: 'Say.Hello',
            topicName: 'hello.topic',
        };
        const value = await this.mqttService.publish(HELLO_TOPIC, payload);
        console.log('mqtt status ', value);
        return message;
    }
}