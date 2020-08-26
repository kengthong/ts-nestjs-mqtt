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
exports.DefaultController = void 0;
const common_1 = require("@nestjs/common");
const default_service_1 = require("./default.service");
let DefaultController = class DefaultController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async send() {
        return this.appService.send();
    }
    async sendToConsumer() {
        return await this.appService.send();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DefaultController.prototype, "getHello", null);
__decorate([
    common_1.Get('/send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DefaultController.prototype, "send", null);
__decorate([
    common_1.Get('/send/consumer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DefaultController.prototype, "sendToConsumer", null);
DefaultController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [default_service_1.DefaultService])
], DefaultController);
exports.DefaultController = DefaultController;
//# sourceMappingURL=default.controller.js.map