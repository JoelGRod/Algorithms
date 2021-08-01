/**
 * Returns a string that simulates a stair with the exact steps given with parameter
 */

export function createStair(steps: number): string {

    let stair: string = "";
    const stepType: string = "[-]";

    for(let step = 1; step <= steps; step++) {
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