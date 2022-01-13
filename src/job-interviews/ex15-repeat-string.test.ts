import { repeatString } from "./ex15-repeat-string";

describe("Exercise 15", () => {
    const text: string = "Hello";
    const repetition: number = 6;
    test("repeatString is defined", () => {
        expect(repeatString).toBeDefined();
    });
    test("repeatString returns a repeated string x number of times", () => {
        expect(repeatString(text, repetition)).toBe("HelloHelloHelloHelloHelloHello");
    });
});