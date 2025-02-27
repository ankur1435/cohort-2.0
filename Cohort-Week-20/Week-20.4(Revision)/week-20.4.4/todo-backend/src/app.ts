import { json, urlencoded } from "express";
import { RegisterRoutes } from "../build/routes";
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

export const app = express();

app.use(
    "/docs",
    swaggerUi.serve,
    (async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const swaggerDocument = await import("../build/swagger.json");
            res.send(swaggerUi.generateHTML(swaggerDocument));
        } catch (error) {
            next(error); 
        }
    }) as express.RequestHandler 
);

app.use(
    urlencoded({
        extended: true,
    })
);
app.use(json());

RegisterRoutes(app);