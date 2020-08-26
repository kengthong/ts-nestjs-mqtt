"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MqttModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttModule = void 0;
const mqtt_service_1 = require("./mqtt.service");
const client_provider_1 = require("./client.provider");
const constants_1 = require("../constants");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
let MqttModule = MqttModule_1 = class MqttModule {
    static forRoot(options) {
        return {
            module: MqttModule_1,
            providers: [
                {
                    provide: constants_1.MQTT_OPTION_PROVIDER,
                    useValue: options,
                },
                client_provider_1.createClientProvider(),
                mqtt_service_1.MqttService,
            ],
            exports: [],
        };
    }
};
MqttModule = MqttModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [core_1.DiscoveryModule],
        exports: [mqtt_service_1.MqttService],
    })
], MqttModule);
exports.MqttModule = MqttModule;
//# sourceMappingURL=mqtt.module.js.map