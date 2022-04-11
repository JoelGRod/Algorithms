import { greet } from "../main/hello_world";

describe("Fundamentals - hello world", () => {
    test("greeting", () => {
        expect(greet()).toEqual("hello world!");
    })
})