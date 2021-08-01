"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex11_show_stair_1 = require("./ex11-show-stair");
describe('Exercise 11', () => {
    const steps = 5;
    test('createStair is defined', () => {
        expect(ex11_show_stair_1.createStair).toBeDefined();
    });
    test('createStair returns exact steps', () => {
        expect(ex11_show_stair_1.createStair(steps)).toBe("[-]\n[-][-]\n[-][-][-]\n[-][-][-][-]\n[-][-][-][-][-]\n");
    });
});
