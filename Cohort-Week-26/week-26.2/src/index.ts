import express from "express";
import { requestCount } from "./monitoring/requestCount";
import client from "prom-client";

const app = express();

app.use(requestCount);

app.get("/user", (req, res) => {
    res.json({
        name: "rohit"
    })
})

app.post("/user", (req, res) => {
    res.json({
        name: "rohit"
    })
})

app.get("/metrics", async(req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000);