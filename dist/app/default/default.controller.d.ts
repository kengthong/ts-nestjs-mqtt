import { DefaultService } from './default.service';
export declare class DefaultController {
    private readonly appService;
    constructor(appService: DefaultService);
    getHello(): {
        value: string;
    };
    send(): Promise<{
        value: string;
    }>;
    sendToConsumer(): Promise<{
        value: string;
    }>;
}
