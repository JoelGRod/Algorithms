import { removeDuplicatesAndStrings } from "./ex31-no-duplicates-no-strings";


describe("Exercise 31", () => {
    const list: any = [5, 5, 10000, 56000, "hello", 45, "Hi", "SOme string", 87, 56000, 45];

    test("removeDuplicatesAndStrings is defined", () => {
        expect(removeDuplicatesAndStrings).toBeDefined();
    });
    test("removeDuplicatesAndStrings returns array without strings and duplicates", () => {
        expect(removeDuplicatesAndStrings(list)).toEqual([5, 10000, 56000, 45, 87]);
    });

});