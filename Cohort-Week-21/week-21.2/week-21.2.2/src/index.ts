import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().addUserToStock(Math.random().toString(), 'Apple')
}, 5000);