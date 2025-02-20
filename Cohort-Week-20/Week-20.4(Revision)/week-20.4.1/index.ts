import express from "express";
import swaggerUI from "swagger-ui-express";
import { openapiSpec } from "./openapispec";

const app = express()
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jame Doe' }
];

app.get('/users', (req, res) => {
    const { name } = req.query;

    if (name) {
        //@ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(openapiSpec));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});