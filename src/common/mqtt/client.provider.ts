import { Provider } from '@nestjs/common';
import { connect } from 'mqtt';
import { Logger } from '@nestjs/common';
import { MqttModuleOptions } from '../interface/mqtt.interface';
import { MQTT_CLIENT_INSTANCE, MQTT_OPTION_PROVIDER } from '../constants';

export function createClientProvider(): Provider {
    return {
        provide: MQTT_CLIENT_INSTANCE,
        useFactory: (options: MqttModuleOptions) => {
            const logger = new Logger('Mqtt Client Provider');
            const client = connect(options);

            client.on('connect', () => {
                logger.log('MQTT connected');
            });

            client.on('disconnect', () => {
                logger.log('MQTT disconnected');
            });

            client.on('error', (error) => {
                logger.log('MQTT error:', JSON.stringify(error));
            });

            client.on('reconnect', () => {
                logger.log('MQTT reconnecting');
            });

            client.on('close', (error) => {
                logger.log('MQTT closed', error);
            });

            client.on('offline', () => {
                logger.log('MQTT offline');
            });

            return client;
        },
        inject: [MQTT_OPTION_PROVIDER],
    };
}
