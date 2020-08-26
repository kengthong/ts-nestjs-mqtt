import {Injectable} from '@nestjs/common';
import {AbstractMqttConsumer} from "../../common/mqtt/abstract.consumer";
import {HELLO_TOPIC} from "../../common/constants";
import {Subscribe} from "../../common/mqtt/mqtt.decorator";
import {MqttPayload} from "../../common/mqtt/mqtt.message";

@Injectable()
export class ConsumerService extends AbstractMqttConsumer {
    protected registerTopic() {
        this.addTopic(HELLO_TOPIC);
    }

    /**
     * When group id is unique for every container.
     * @param payload
     */
    @Subscribe(HELLO_TOPIC)
    helloSubscriber(payload: MqttPayload) {
        console.log('[MQTT-CONSUMER] Print message after receiving', payload);
    }
}