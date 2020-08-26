export const SUBSCRIBER_FN_REF_MAP = new Map();
export const SUBSCRIBER_OBJ_REF_MAP = new Map();

export function Subscribe(topic: string): any | undefined {
    return function (target: any | undefined, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = target[propertyKey];
        SUBSCRIBER_FN_REF_MAP.set(topic, originalMethod);
        return descriptor;
    };
}
