import { toTitleCase } from "../main/ex24-title-case";

describe("Exercise 24", () => {
    const text: string = "this is a test string";
    test("toTitleCase is defined", () => {
        expect(toTitleCase).toBeDefined();
    });
    test("toTitleCase returns a title case string", () => {
        expect(toTitleCase(text)).toBe("This Is A Test String");
    });
});