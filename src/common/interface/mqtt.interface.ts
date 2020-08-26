import { IClientOptions } from 'mqtt';

export interface MqttModuleOptions extends IClientOptions {
    /**
     * Global queue subscribe.
     * All topic will be prepend '$queue/' prefix automatically.
     * More information is here:
     * https://docs.emqx.io/broker/latest/cn/advanced/shared-subscriptions.html
     */
    queue?: boolean;

    /**
     * Global shared subscribe.
     * All topic will be prepend '$share/group/' prefix automatically.
     * More information is here:
     * https://docs.emqx.io/broker/latest/cn/advanced/shared-subscriptions.html
     */
    share?: string;
}
