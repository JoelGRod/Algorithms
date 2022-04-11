import { countSheep } from "../main/count_sheep";

describe("Fundamentals - Count Sheep", () => {
    test("countSheep", () => {
        expect(countSheep(0)).toEqual('');
        expect(countSheep(1)).toEqual('1 sheep...');
        expect(countSheep(2)).toEqual('1 sheep...2 sheep...');
        expect(countSheep(3)).toEqual('1 sheep...2 sheep...3 sheep...');
    })
})