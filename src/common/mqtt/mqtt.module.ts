import { MqttService } from './mqtt.service';
import { createClientProvider } from './client.provider';
import { MqttModuleOptions } from '../interface/mqtt.interface';
import {MQTT_OPTION_PROVIDER} from "../constants";
import {DiscoveryModule} from "@nestjs/core";
import {DynamicModule, Global, Module} from "@nestjs/common";

@Global()
@Module({
    imports: [DiscoveryModule],
    exports: [MqttService],
})
export class MqttModule {
    public static forRoot(options: MqttModuleOptions): DynamicModule {
        return {
            module: MqttModule,
            providers: [
                {
                    provide: MQTT_OPTION_PROVIDER,
                    useValue: options,
                },
                createClientProvider(),
                MqttService,
            ],
            exports: [],
        };
    }
}
