import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("Tests the sum function", () => {
    it("Should return 3 when 1 + 2", async() => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })

        expect(res.body.answer).toBe((3));
        expect(res.statusCode).toBe(200);
    })
})