import { drawSquare } from "./ex7-draw-square";

describe('Exercise 7', () => {
    const side: number = 4;
    test('drawSquare is defined', () => {
        expect(drawSquare).toBeDefined();
    });
    test('drawSquare returns asterisks square correct', () => {
        expect(drawSquare(side)).toBe('****\n*  *\n*  *\n****');
    });
});