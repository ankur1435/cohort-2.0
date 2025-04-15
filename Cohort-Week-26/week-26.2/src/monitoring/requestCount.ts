import { Request, Response, NextFunction } from "express";
import client from "prom-client";

const requestCounter = new client.Counter({
    name: "request_count",
    help: "Total request count",
    labelNames: ["method", "route"]
});

export function requestCount(req: Request, res: Response, next: NextFunction) {
    
    requestCounter.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path,
    });

    next();
} 