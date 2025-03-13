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
        console.log('✅ Connected to PostgreSQL database successfully');

        // 1NF: Eliminate Repeating Groups
        await client.query(`
            CREATE TABLE IF NOT EXISTS Users (
                user_id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                name VARCHAR(255)
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Orders (
                order_id SERIAL PRIMARY KEY,
                user_id INTEGER,
                product_name VARCHAR(255),
                quantity INTEGER,
                FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
            );
        `);

        // 2NF: Remove Partial Dependency
        await client.query(`
            CREATE TABLE IF NOT EXISTS Products (
                product_id SERIAL PRIMARY KEY,
                product_name VARCHAR(255) UNIQUE
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS OrderDetails (
                order_id INTEGER,
                product_id INTEGER,
                quantity INTEGER,
                PRIMARY KEY (order_id, product_id),
                FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
                FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
            );
        `);

        // 3NF: Remove Transitive Dependency
        await client.query(`
            CREATE TABLE IF NOT EXISTS Shipping (
                shipping_id SERIAL PRIMARY KEY,
                order_id INTEGER,
                shipping_address VARCHAR(255),
                FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE
            );
        `);

        console.log("✅ Normalization (1NF, 2NF, 3NF) completed");

        // Insert data into Users
        await client.query(`
            INSERT INTO Users (email, password, name) VALUES 
            ('user1@example.com', 'password1', 'User One'),
            ('user2@example.com', 'password2', 'User Two')
            ON CONFLICT (email) DO NOTHING;
        `);

        // Insert data into Products
        await client.query(`
            INSERT INTO Products (product_name) VALUES 
            ('Laptop'),
            ('Mobile'),
            ('Tablet')
            ON CONFLICT (product_name) DO NOTHING;
        `);

        // Insert data into Orders
        await client.query(`
            INSERT INTO Orders (user_id, product_name, quantity) VALUES 
            (1, 'Laptop', 1),
            (1, 'Mobile', 2),
            (2, 'Tablet', 3)
            ON CONFLICT DO NOTHING;
        `);

        // Insert data into OrderDetails
        await client.query(`
            INSERT INTO OrderDetails (order_id, product_id, quantity) VALUES 
            (1, 1, 1),
            (1, 2, 2),
            (2, 3, 3)
            ON CONFLICT DO NOTHING;
        `);

        // Insert data into Shipping
        await client.query(`
            INSERT INTO Shipping (order_id, shipping_address) VALUES 
            (1, '123 Main St'),
            (2, '456 Elm St')
            ON CONFLICT DO NOTHING;
        `);

        console.log("✅ Sample data inserted successfully");
    } catch (error) {
        console.error("❌ Error executing normalization and data insertion:", error);
    } finally {
        client.release();
        console.log("🔄 Connection released");
    }
})();