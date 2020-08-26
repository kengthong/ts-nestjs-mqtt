import {Inject, Injectable, Logger, OnModuleInit} from '@nestjs/common';
import { Client, IClientSubscribeOptions, ISubscriptionGrant, Packet } from 'mqtt';
import { SUBSCRIBER_FN_REF_MAP, SUBSCRIBER_OBJ_REF_MAP } from './mqtt.decorator';
import { MqttClient } from 'mqtt/types/lib/client';
import { MessagingServiceInterface } from '../interface/messaging-service.interface';
import { MqttPayload } from './mqtt.message';
import {MQTT_CLIENT_INSTANCE} from "../constants";

@Injectable()
export class MqttService implements OnModuleInit, MessagingServiceInterface {
    private logger = new Logger('MQTTService');

    constructor(@Inject(MQTT_CLIENT_INSTANCE) private readonly client: Client) {}

    onModuleInit(): void {
        SUBSCRIBER_FN_REF_MAP.forEach((functionRef, topic) => {
            this.bindAllTopicToConsumer(this.client, topic);
        });
        this.client.on('message', async (topic, message) => {
            // message is Buffer
            const functionRef = SUBSCRIBER_FN_REF_MAP.get(topic);
            const object = SUBSCRIBER_OBJ_REF_MAP.get(topic);
            await functionRef.apply(object, [JSON.parse(message.toString('utf-8'))]);
        });
    }

    async subscribe(topic: string | string[], opts: IClientSubscribeOptions): Promise<ISubscriptionGrant[]> {
        return new Promise((resolve, reject) => {
            this.client.subscribe(topic, opts, (err, granted) => {
                if (err) {
                    reject(err);
                } else {
                    this.logger.log(`Subscribed to ${topic}`);
                    resolve(granted);
                }
            });
        });
    }

    unsubscribe(topic: string, opts?: Record<string, unknown>): Promise<Packet> {
        return new Promise<Packet>((resolve, reject) => {
            this.client.unsubscribe(topic, opts || undefined, (error, packet) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(packet);
                }
            });
        });
    }

    disconnect(): void {
        this.client.end();
    }

    publish(topic: string, message: MqttPayload): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const msg: string = JSON.stringify(message);
            const options = {};
            this.client.publish(topic, msg, options, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    async bindAllTopicToConsumer(client: MqttClient, topic: string): Promise<void> {
        const opts: IClientSubscribeOptions = {
            qos: 0,
        };
        await this.subscribe(topic, opts);
    }
}
