"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttPayload = void 0;
class MqttPayload {
    constructor(body, messageType, topicName) {
        this.requestId = '' + new Date().valueOf();
        this.body = body;
        this.messageType = messageType;
        this.topicName = topicName;
        this.createdTime = new Date().toISOString();
    }
}
exports.MqttPayload = MqttPayload;
//# sourceMappingURL=mqtt.message.js.map