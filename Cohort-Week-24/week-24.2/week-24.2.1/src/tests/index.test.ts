import {describe, expect, test} from '@jest/globals';
import {sum, multiply} from '../index';

describe('Testing sum function', () => {

    test('should sum 1 and 2 correctly', () => {
        const finalAnswer = sum(1, 2);
        expect(finalAnswer).toBe(3);
    });

    test('should return the sum of negative numbers correctly', () => {
        const finalAnswer = sum(-1, -2);
        expect(finalAnswer).toBe(-3);
    });

});

describe('Testing multiply function', () => {

    test('should multiply 1 and 2 correctly', () => {
        const finalAnswer = multiply(1, 2);
        expect(finalAnswer).toBe(2);
    });

});