"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttConfigModule = void 0;
const mqtt_module_1 = require("../common/mqtt/mqtt.module");
class MqttConfigModule {
    static forConnection() {
        return mqtt_module_1.MqttModule.forRoot({
            host: process.env.MQTT_HOST || 'localhost',
            port: (process.env.MQTT_PORT && parseInt(process.env.MQTT_PORT, 10)) || 8883,
            queue: true,
            clientId: 'ts-nestjs-mqtt',
        });
    }
}
exports.MqttConfigModule = MqttConfigModule;
//# sourceMappingURL=mqtt.config.js.map