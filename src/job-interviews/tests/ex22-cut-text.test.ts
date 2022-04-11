import { cutText } from '../main/ex22-cut-text';

describe("Exercise 22", () => {
    const text: string = "Hello world";
    const digit: number = 6;
    test("cutText is defined", () => {
        expect(cutText).toBeDefined();
    });
    test("cutText returns correct cutted string", () => {
        expect(cutText(text, digit)).toBe("Hello ");
    });
});