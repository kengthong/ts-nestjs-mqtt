import { Module } from '@nestjs/common';
import { DefaultModule } from './app/default/default.module';
import { ConsumerModule } from './app/consumer/consumer.module';
import {MqttConfigModule} from "./config/mqtt.config";

@Module({
    imports: [
        MqttConfigModule.forConnection(),
        DefaultModule,
        ConsumerModule,
    ],
})
export class AppModule {}