"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex32_geometric_angles_1 = require("./ex32-geometric-angles");
describe("Exercise 32", () => {
    const angleOne = 70;
    const angleTwo = 90;
    const angleThree = 110;
    const angleFour = 180;
    const angleFive = 200;
    const angleSix = 360;
    const angleSeven = 460;
    test("getAngle is defined", () => {
        expect(ex32_geometric_angles_1.getAngle).toBeDefined();
    });
    test("getAngle returns acute with number < 90", () => {
        expect(ex32_geometric_angles_1.getAngle(angleOne)).toBe("Acute Angle");
    });
    test("getAngle returns Right Angle with number === 90", () => {
        expect(ex32_geometric_angles_1.getAngle(angleTwo)).toBe("Right Angle");
    });
    test("getAngle returns Obtuse Angle with number > 90 && < 180", () => {
        expect(ex32_geometric_angles_1.getAngle(angleThree)).toBe("Obtuse Angle");
    });
    test("getAngle returns Straight Angle with number === 180", () => {
        expect(ex32_geometric_angles_1.getAngle(angleFour)).toBe("Straight Angle");
    });
    test("getAngle returns Reflex Angle with number > 180", () => {
        expect(ex32_geometric_angles_1.getAngle(angleFive)).toBe("Reflex Angle");
    });
    test("getAngle returns Full Rotation with number === 360", () => {
        expect(ex32_geometric_angles_1.getAngle(angleSix)).toBe("Full Rotation Angle");
    });
    test("getAngle returns Error with number > 360", () => {
        expect(ex32_geometric_angles_1.getAngle(angleSeven)).toBe("This number is not a valid angle");
    });
});
