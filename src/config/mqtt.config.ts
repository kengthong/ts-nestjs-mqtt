import { DynamicModule } from '@nestjs/common';
import { MqttModule } from '../common/mqtt/mqtt.module';

/**
 * Mqtt Connection configuration
 */
export class MqttConfigModule {
    static forConnection(): DynamicModule {
        return MqttModule.forRoot({
            host: process.env.MQTT_HOST || 'localhost',
            // username: process.env.MQTT_USERNAME,
            // password: process.env.MQTT_PASSWORD,
            port: (process.env.MQTT_PORT && parseInt(process.env.MQTT_PORT, 10)) || 8883,
            queue: true,
            // protocol: 'ssl',
            clientId: 'ts-nestjs-mqtt',
        });
    }
}