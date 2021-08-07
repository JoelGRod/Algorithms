import { getAngle } from './ex32-geometric-angles';


describe("Exercise 32", () => {
    const angleOne: number = 70;
    const angleTwo: number = 90;
    const angleThree: number = 110;
    const angleFour: number = 180;
    const angleFive: number = 200;
    const angleSix: number = 360;
    const angleSeven: number = 460;

    test("getAngle is defined", () => {
        expect(getAngle).toBeDefined();
    });
    test("getAngle returns acute with number < 90", () => {
        expect(getAngle(angleOne)).toBe("Acute Angle");
    });
    test("getAngle returns Right Angle with number === 90", () => {
        expect(getAngle(angleTwo)).toBe("Right Angle");
    });
    test("getAngle returns Obtuse Angle with number > 90 && < 180", () => {
        expect(getAngle(angleThree)).toBe("Obtuse Angle");
    });
    test("getAngle returns Straight Angle with number === 180", () => {
        expect(getAngle(angleFour)).toBe("Straight Angle");
    });
    test("getAngle returns Reflex Angle with number > 180", () => {
        expect(getAngle(angleFive)).toBe("Reflex Angle");
    });
    test("getAngle returns Full Rotation with number === 360", () => {
        expect(getAngle(angleSix)).toBe("Full Rotation Angle");
    });
    test("getAngle returns Error with number > 360", () => {
        expect(getAngle(angleSeven)).toBe("This number is not a valid angle");
    });
});