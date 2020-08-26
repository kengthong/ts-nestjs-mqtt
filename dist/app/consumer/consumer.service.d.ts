import { AbstractMqttConsumer } from "../../common/mqtt/abstract.consumer";
import { MqttPayload } from "../../common/mqtt/mqtt.message";
export declare class ConsumerService extends AbstractMqttConsumer {
    protected registerTopic(): void;
    helloSubscriber(payload: MqttPayload): void;
}
