import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function deleteUsersTable(id: number) {
    await client.connect();
    const result = await client.query(`
        DELETE FROM users2 WHERE id = $1
    `, [id])
    console.log(`User with ID ${id} deleted!`);
}

deleteUsersTable(
    2
);