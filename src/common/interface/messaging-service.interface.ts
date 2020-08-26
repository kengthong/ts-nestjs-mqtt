import { IClientSubscribeOptions, ISubscriptionGrant } from 'mqtt';
import { MqttPayload } from '../mqtt/mqtt.message';

export interface MessagingServiceInterface {
    // publish(topic: string, message: string | Buffer | object, opts?: IClientPublishOptions): Promise<Packet>;
    subscribe(topic: string | string[], opts: IClientSubscribeOptions): Promise<ISubscriptionGrant[]>;

    publish(topic: string, message: MqttPayload): Promise<void>;
}
