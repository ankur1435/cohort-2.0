import { describe, it, expect } from '@jest/globals';
import { sum } from "..";

// supposed to add a bunch of test cases 
describe('sum', () => {
    it("should be able to add two positive numbers", () => {
        const ans = sum(2, 3);
        expect(ans).toBe(5);
    })

    it("should be able to add two negative numbers", () => {
        const ans = sum(-2, -3);
        expect(ans).toBe(-5);
    })

    it("should be able to add two 0's", () => {
        const ans = sum(0, 0);
        expect(ans).toBe(0);
    })
});