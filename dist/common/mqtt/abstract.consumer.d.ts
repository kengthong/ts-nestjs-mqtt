import { OnModuleInit } from '@nestjs/common';
export declare abstract class AbstractMqttConsumer implements OnModuleInit {
    protected abstract registerTopic(): void;
    onModuleInit(): Promise<void>;
    protected addTopic(topicName: string): void;
}
