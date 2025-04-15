import { Request, Response, NextFunction } from "express";
import client from "prom-client";

export const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000]
});

export function requestCount(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    
    res.on("finish", () => {
        const endTime = Date.now();
        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.body ? req.route.path : req.path,
            code: res.statusCode
        }, endTime - startTime);
    });

    next();
} 