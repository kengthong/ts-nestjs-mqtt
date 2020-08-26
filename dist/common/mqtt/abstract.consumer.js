"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMqttConsumer = void 0;
const mqtt_decorator_1 = require("./mqtt.decorator");
class AbstractMqttConsumer {
    async onModuleInit() {
        this.registerTopic();
    }
    addTopic(topicName) {
        mqtt_decorator_1.SUBSCRIBER_OBJ_REF_MAP.set(topicName, this);
    }
}
exports.AbstractMqttConsumer = AbstractMqttConsumer;
//# sourceMappingURL=abstract.consumer.js.map