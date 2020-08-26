import { OnModuleInit } from '@nestjs/common';
import { SUBSCRIBER_OBJ_REF_MAP } from './mqtt.decorator';

export abstract class AbstractMqttConsumer implements OnModuleInit {
    protected abstract registerTopic(): void;

    public async onModuleInit(): Promise<void> {
        this.registerTopic();
    }

    protected addTopic(topicName: string): void {
        SUBSCRIBER_OBJ_REF_MAP.set(topicName, this);
    }
}
