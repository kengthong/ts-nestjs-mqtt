"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientProvider = void 0;
const mqtt_1 = require("mqtt");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
function createClientProvider() {
    return {
        provide: constants_1.MQTT_CLIENT_INSTANCE,
        useFactory: (options) => {
            const logger = new common_1.Logger('Mqtt Client Provider');
            const client = mqtt_1.connect(options);
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
        inject: [constants_1.MQTT_OPTION_PROVIDER],
    };
}
exports.createClientProvider = createClientProvider;
//# sourceMappingURL=client.provider.js.map