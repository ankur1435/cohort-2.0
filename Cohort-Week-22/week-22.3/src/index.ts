import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
});

(async () => {
    const client = await pool.connect();
    try {
        console.log('onnected to PostgreSQL database successfully');

        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                name VARCHAR(255)
            );
        `);
        console.log("Users table created");

        await client.query(`
            CREATE TABLE IF NOT EXISTS posts (
                post_id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                image VARCHAR(255),
                FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
            );
        `);
        console.log("Posts table created");

        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_posts_user_id_title 
            ON posts (description, title);
        `);
        console.log("Index created on posts table");

        const users = [];
        for (let i = 1; i <= 5; i++) {
            const result = await client.query(
                `INSERT INTO users (email, password, name) 
                 VALUES ($1, $2, $3) RETURNING user_id;`,
                [`user${i}@example.com`, `pass${i}`, `User ${i}`]
            );
            users.push(result.rows[0].user_id);
        }
        console.log("Inserted 5 users:", users);

        for (const userId of users) {
            const postValues = [];
            for (let j = 1; j <= 500000; j++) {
                postValues.push(`(${userId}, 'Title ${j}', 'Description for post ${j}')`);
            }

            const insertPostsQuery = `
                INSERT INTO posts (user_id, title, description) 
                VALUES ${postValues.slice(0, 10000).join(", ")};
            `;

            await client.query(insertPostsQuery);
            console.log(`Inserted first 10,000 posts for user ${userId} (Batch 1)`);
        }

        const { rows: posts } = await client.query(`SELECT * FROM users;`);
        console.log("Users in database:", posts);

    } catch (error) {
        console.error("Error executing queries:", error);
    } finally {
        client.release();
        console.log("Connection released");
    }
})();
