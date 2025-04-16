import express from "express";
import client, { Gauge } from "prom-client";

const app = express();

const activeUserGauge = new Gauge({
    name: "active_users",
    help: "Numberr of active users",
})

// @ts-ignore
function middleware(req, res, next) {
    activeUserGauge.inc();
    res.on("finish", () => {
        activeUserGauge.dec();
    }); 
    
    next();
}

app.use(middleware);

app.get("/user", (req, res) => {
    res.status(404).send({
        name: "Rohit",
        age: 21
    });
});

app.get("/metrics", async(req, res) => {
    const metrics = await client.register.metrics();
    console.log(metrics);
    res.set('Content-Type', client.register.contentType);
    res.end(metrics); 
})

app.listen(3000);