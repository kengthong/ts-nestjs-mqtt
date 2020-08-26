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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttService = void 0;
const common_1 = require("@nestjs/common");
const mqtt_1 = require("mqtt");
const mqtt_decorator_1 = require("./mqtt.decorator");
const constants_1 = require("../constants");
let MqttService = class MqttService {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('MQTTService');
    }
    onModuleInit() {
        mqtt_decorator_1.SUBSCRIBER_FN_REF_MAP.forEach((functionRef, topic) => {
            this.bindAllTopicToConsumer(this.client, topic);
        });
        this.client.on('message', async (topic, message) => {
            const functionRef = mqtt_decorator_1.SUBSCRIBER_FN_REF_MAP.get(topic);
            const object = mqtt_decorator_1.SUBSCRIBER_OBJ_REF_MAP.get(topic);
            await functionRef.apply(object, [JSON.parse(message.toString('utf-8'))]);
        });
    }
    async subscribe(topic, opts) {
        return new Promise((resolve, reject) => {
            this.client.subscribe(topic, opts, (err, granted) => {
                if (err) {
                    reject(err);
                }
                else {
                    this.logger.log(`Subscribed to ${topic}`);
                    resolve(granted);
                }
            });
        });
    }
    unsubscribe(topic, opts) {
        return new Promise((resolve, reject) => {
            this.client.unsubscribe(topic, opts || undefined, (error, packet) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(packet);
                }
            });
        });
    }
    disconnect() {
        this.client.end();
    }
    publish(topic, message) {
        return new Promise((resolve, reject) => {
            const msg = JSON.stringify(message);
            const options = {};
            this.client.publish(topic, msg, options, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
    async bindAllTopicToConsumer(client, topic) {
        const opts = {
            qos: 0,
        };
        await this.subscribe(topic, opts);
    }
};
MqttService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.MQTT_CLIENT_INSTANCE)),
    __metadata("design:paramtypes", [mqtt_1.Client])
], MqttService);
exports.MqttService = MqttService;
//# sourceMappingURL=mqtt.service.js.map