import { describe, expect, test } from 'vitest';

const add = (x:number, y:number):number => {
    return x + y;
}

describe('add', () => {
    test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('3 + 4 != 4', () => {
        expect(add(3, 4)).not.toBe(4);
    });
});