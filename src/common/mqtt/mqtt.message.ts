export class MqttPayload {
    public body?: any;
    public requestId?: string;
    public messageType?: string;
    public topicName?: string;
    public createdTime?: string;
    public partition?: any | string;

    constructor(body?: any | string, messageType?: string, topicName?: string) {
        this.requestId =  '' + new Date().valueOf();
        this.body = body;
        this.messageType = messageType;
        this.topicName = topicName;
        this.createdTime = new Date().toISOString();
    }
}
