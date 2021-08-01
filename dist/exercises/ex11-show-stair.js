"use strict";
/**
 * Returns a string that simulates a stair with the exact steps given with parameter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStair = void 0;
function createStair(steps) {
    let stair = "";
    const stepType = "[-]";
    for (let step = 1; step <= steps; step++) {
        stair += stepType.repeat(step) + "\n";
    }
    return stair;
    // for(let level = 1; level <= steps; level++) {
    //     let actualLevel: string = "";
    //     for(let step = 1; step <= level; step++) {
    //         actualLevel += "[-]";
    //     }
    //     stair += actualLevel + "\n";
    // }
}
exports.createStair = createStair;
