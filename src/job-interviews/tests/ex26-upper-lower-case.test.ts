import { toUpperOrLowerCase } from "../main/ex26-upper-lower-case";


describe("Exercise 26", () => {
    const upperString: string = "THIS IS A TEst string";
    const lowerString: string = "This Is a Test string";
    test("toUpperOrLowerCase is defined", () => {
        expect(toUpperOrLowerCase).toBeDefined();
    })
    test("toUpperOrLowerCase returns uppercase string", () => {
        expect(toUpperOrLowerCase(upperString)).toBe("THIS IS A TEST STRING");
    })
    test("toUpperOrLowerCase returns lowercase string", () => {
        expect(toUpperOrLowerCase(lowerString)).toBe("this is a test string");
    })
});