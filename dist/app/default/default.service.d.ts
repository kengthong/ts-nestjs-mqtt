import { MqttService } from "../../common/mqtt/mqtt.service";
export declare class DefaultService {
    private readonly mqttService;
    constructor(mqttService: MqttService);
    getHello(): {
        value: string;
    };
    send(): Promise<{
        value: string;
    }>;
}
