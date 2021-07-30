"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex7_draw_square_1 = require("./ex7-draw-square");
describe('Exercise 7', () => {
    const side = 4;
    test('drawSquare is defined', () => {
        expect(ex7_draw_square_1.drawSquare).toBeDefined();
    });
    test('drawSquare returns asterisks square correct', () => {
        expect(ex7_draw_square_1.drawSquare(side)).toBe('****\n*  *\n*  *\n****');
    });
});
