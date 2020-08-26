export declare class MqttPayload {
    body?: any;
    requestId?: string;
    messageType?: string;
    topicName?: string;
    createdTime?: string;
    partition?: any | string;
    constructor(body?: any | string, messageType?: string, topicName?: string);
}
