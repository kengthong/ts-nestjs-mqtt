"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = exports.SUBSCRIBER_OBJ_REF_MAP = exports.SUBSCRIBER_FN_REF_MAP = void 0;
exports.SUBSCRIBER_FN_REF_MAP = new Map();
exports.SUBSCRIBER_OBJ_REF_MAP = new Map();
function Subscribe(topic) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = target[propertyKey];
        exports.SUBSCRIBER_FN_REF_MAP.set(topic, originalMethod);
        return descriptor;
    };
}
exports.Subscribe = Subscribe;
//# sourceMappingURL=mqtt.decorator.js.map