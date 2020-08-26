import { IClientSubscribeOptions, ISubscriptionGrant } from 'mqtt';
import { MqttPayload } from '../mqtt/mqtt.message';
export interface MessagingServiceInterface {
    subscribe(topic: string | string[], opts: IClientSubscribeOptions): Promise<ISubscriptionGrant[]>;
    publish(topic: string, message: MqttPayload): Promise<void>;
}
