import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function updateUsersTable(id: number) {
    await client.connect();
    const result = await client.query(`
        UPDATE users2 SET password = $1 WHERE id = $2
    `, ["new_password", id])
    console.log(result);
}

updateUsersTable(
    2
);