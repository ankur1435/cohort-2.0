import { createClient, RedisClientType } from 'redis';

export class PubSubManager {
    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subsciptions: Map<string, string[]>;

    // Private constructor to prevent direct construction call
    private constructor() {
        // Create a Redis client and connect to the Redis serv
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subsciptions = new Map();
    }

    public static getInstance(): PubSubManager {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    addUserToStock(userId: string, stockTicker: string) {
        if (!this.subsciptions.has(stockTicker)) {
            this.subsciptions.set(stockTicker, []);
        }
        this.subsciptions.get(stockTicker)?.push(userId);

        if (this.subsciptions.get(stockTicker)?.length === 1) {
            this.redisClient.subscribe(stockTicker, (message) => {
                this.forwardMessageToUser(stockTicker, message);
            });
            console.log(`Subscribed to Redis channel: ${stockTicker}`);
        }
    }

    removeUserFromStock(userId: string, stockTicker: string) {
        this.subsciptions.set(stockTicker, this.subsciptions.get(stockTicker)?.filter((sub) => sub !== userId) || []);

        if (this.subsciptions.get(stockTicker)?.length === 0) {
            this.redisClient.unsubscribe(stockTicker);
            console.log(`Unsubscribed to Redis channel: ${stockTicker}`);
        }
    }

    forwardMessageToUser(message: string, stockTicker: string) {
        console.log(`Message received on channel ${stockTicker}: ${message}`);
        this.subsciptions.get(stockTicker)?.forEach((sub) => {
            console.log(`Sending message to user: ${sub}`);
        });
    }
}