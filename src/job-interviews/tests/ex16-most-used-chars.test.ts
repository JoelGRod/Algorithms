import { findMostUsedChar } from "../main/ex16-most-used-chars";

describe("Exercise 16", () => {
    const text: string = "Most used worde ise... ie donte knowe";
    test("findMostUsedChar is defined", () => {
        expect(findMostUsedChar).toBeDefined();
    });
    test("findMostUsedChar return most used char", () => {
        expect(findMostUsedChar(text)).toBe("e");
    });
});