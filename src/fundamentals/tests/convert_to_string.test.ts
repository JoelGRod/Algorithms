import { convertToString } from "../main/convert_to_string";

describe("Fundamentals - Convert to String", () => {
    test("convert_to_string", () => {
        expect(convertToString(45)).toEqual("45");
    })
})