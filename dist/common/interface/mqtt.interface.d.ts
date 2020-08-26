import { IClientOptions } from 'mqtt';
export interface MqttModuleOptions extends IClientOptions {
    queue?: boolean;
    share?: string;
}
