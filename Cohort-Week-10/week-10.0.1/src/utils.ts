import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:j46LuXtAzsBf@ep-white-flower-a1h15xox.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}