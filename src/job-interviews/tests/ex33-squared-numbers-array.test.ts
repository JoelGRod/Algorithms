import { getSquaredList } from '../main/ex33-squared-numbers-array';


describe("Exercise 33", () => {
    const numberList: any[] = ["Hello", "John", 2, 5, 10, "Peter"];

    test("getSquaredList is defined", () => {
        expect(getSquaredList).toBeDefined();
    });
    test("getSquaredList returns array to power", () => {
        expect(getSquaredList(numberList)).toEqual([4, 25, 100]);
    });
});