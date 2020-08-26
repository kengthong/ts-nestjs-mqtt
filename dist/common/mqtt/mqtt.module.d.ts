import { MqttModuleOptions } from '../interface/mqtt.interface';
import { DynamicModule } from "@nestjs/common";
export declare class MqttModule {
    static forRoot(options: MqttModuleOptions): DynamicModule;
}
