"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerService = void 0;
const common_1 = require("@nestjs/common");
const abstract_consumer_1 = require("../../common/mqtt/abstract.consumer");
const constants_1 = require("../../common/constants");
const mqtt_decorator_1 = require("../../common/mqtt/mqtt.decorator");
const mqtt_message_1 = require("../../common/mqtt/mqtt.message");
let ConsumerService = class ConsumerService extends abstract_consumer_1.AbstractMqttConsumer {
    registerTopic() {
        this.addTopic(constants_1.HELLO_TOPIC);
    }
    helloSubscriber(payload) {
        console.log('[MQTT-CONSUMER] Print message after receiving', payload);
    }
};
__decorate([
    mqtt_decorator_1.Subscribe(constants_1.HELLO_TOPIC),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mqtt_message_1.MqttPayload]),
    __metadata("design:returntype", void 0)
], ConsumerService.prototype, "helloSubscriber", null);
ConsumerService = __decorate([
    common_1.Injectable()
], ConsumerService);
exports.ConsumerService = ConsumerService;
//# sourceMappingURL=consumer.service.js.map