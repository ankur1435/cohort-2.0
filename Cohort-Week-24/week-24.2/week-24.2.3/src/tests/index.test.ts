import { describe, expect, it, vi } from 'vitest';
import request from "supertest";
import { app } from '../index';

vi.mock('../db');

describe("POST /sum", () => {
    it("should return the sum of two numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("should return the sum of two negative numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    });
});