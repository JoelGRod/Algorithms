import { sumMix } from "../main/sum_mixed_array";

describe("Fundamentals - Sum mixed array", () => {
    test("sum_mixed_array", () => {
        expect(sumMix([9, 3, '7', '3'])).toEqual(22);
        expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toEqual(42);
        expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toEqual(41);
    })
})
