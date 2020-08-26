import {Controller, Get} from '@nestjs/common';
import {DefaultService} from './default.service';

@Controller()
export class DefaultController {
    constructor(private readonly appService: DefaultService) {
    }

    @Get()
    getHello() {
        return this.appService.getHello();
    }

    @Get('/send')
    async send() {
        return this.appService.send();
    }

    @Get('/send/consumer')
    async sendToConsumer() {
        return  await this.appService.send();
    }
}