import { OnModuleInit } from '@nestjs/common';
import { Client, IClientSubscribeOptions, ISubscriptionGrant, Packet } from 'mqtt';
import { MqttClient } from 'mqtt/types/lib/client';
import { MessagingServiceInterface } from '../interface/messaging-service.interface';
import { MqttPayload } from './mqtt.message';
export declare class MqttService implements OnModuleInit, MessagingServiceInterface {
    private readonly client;
    private logger;
    constructor(client: Client);
    onModuleInit(): void;
    subscribe(topic: string | string[], opts: IClientSubscribeOptions): Promise<ISubscriptionGrant[]>;
    unsubscribe(topic: string, opts?: Record<string, unknown>): Promise<Packet>;
    disconnect(): void;
    publish(topic: string, message: MqttPayload): Promise<void>;
    bindAllTopicToConsumer(client: MqttClient, topic: string): Promise<void>;
}
