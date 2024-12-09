import { Client } from "pg";

// Async function to insert data into a table
async function insertData() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'rohit@026'
    });

    try{
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username', 'username@example.com', 'userpassword');";
        const res = await client.query(insertQuery);
        console.log("Insertion success", res); // Output insertion result
    } catch(err) {
        console.log("Error during the insertion", err);
    } finally {
        await client.end(); // Clone the client connection
    }
}

insertData();