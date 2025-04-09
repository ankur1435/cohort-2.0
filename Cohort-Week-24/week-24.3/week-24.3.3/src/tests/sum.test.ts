import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../__mocks__/db";

// mockReturnedValue
vi.mock("../db")

describe("Tests the sum function", () => {
    it("Should return 3 when 1 + 2", async() => {
        prismaClient.Request.create.mockResolvedValue({
            id: 1,
            answer: 3,
            type: "Sum",
            a: 1,
            b: 2
        })
        vi.spyOn(prismaClient.Request, "create");

        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })

        expect(prismaClient.Request.create).toHaveBeenCalledWith({
            data: {
                a: 1,
                b: 2,
                type: "Sum",
                answer: 3
            }
        })

        expect(res.body.answer).toBe(3);
        expect(res.statusCode).toBe(200);
    })

    it("Should fail when a number is too big", async() => {
        const res = await request(app).post('/sum').send({
            a: 10000000000,
            b: 2
        })

        expect(res.body.message).toBe("Sorry we dont support big numbers");
        expect(res.statusCode).toBe(422);
    })
})

describe("Tests the multiplication function", () => {
    it("Should return right value if the one number value is 0", async() => {
        const res = await request(app).post('/multiply').send({
            a: 0,
            b: 1000
        })

        expect(res.body.answer).toBe(0);
    })

    it("Should return right value if the one number is negative", async() => {
        const res = await request(app).post('/multiply').send({
            a: -2,
            b: 1000
        })

        expect(res.body.answer).toBe(-2000);
    })
})