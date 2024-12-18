import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function insertUsersTable(username: string, password: string, email: string) {
    const result = await client.query(`
        INSERT INTO "User" (username, password, email)
        VALUES ($1, $2, $3)
        RETURNING id
    `,[username, password, email]);
    console.log("User inserted:", result.rows[0]);
    return result.rows[0].id; 
}

async function insertAddressesTable(user_id: number, city: string, country: string, street: string, pincode: string) {
    const result = await client.query(`
        INSERT INTO addresses (user_id, city, country, street, pincode)
        VALUES ($1, $2, $3, $4, $5)
    `,[user_id, city, country, street, pincode]);

    console.log("Address inserted:", result.rowCount);
}

async function main() {
    try {
        await client.connect();
        const userId = await insertUsersTable("rohit", "123", "rohit@gmail.com");

        await insertAddressesTable(userId, "Cannada", "America", "123 Broadway St", "11001");

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}

main();