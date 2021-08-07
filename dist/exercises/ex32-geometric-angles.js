"use strict";
/**
 * Given a number return what kind of angle represents.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAngle = void 0;
function getAngle(angle) {
    if (angle < 90)
        return "Acute Angle";
    if (angle === 90)
        return "Right Angle";
    if (angle > 90 && angle < 180)
        return "Obtuse Angle";
    if (angle === 180)
        return "Straight Angle";
    if (angle > 180 && angle < 360)
        return "Reflex Angle";
    if (angle === 360)
        return "Full Rotation Angle";
    return "This number is not a valid angle";
}
exports.getAngle = getAngle;
