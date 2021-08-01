import { createStair } from './ex11-show-stair';

describe('Exercise 11', () => {
    const steps: number = 5;
    test('createStair is defined', () => {
        expect(createStair).toBeDefined();
    });
    test('createStair returns exact steps', () => {
        expect(createStair(steps)).toBe("[-]\n[-][-]\n[-][-][-]\n[-][-][-][-]\n[-][-][-][-][-]\n");
    });
});