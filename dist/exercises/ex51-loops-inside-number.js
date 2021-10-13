"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loops = {
    0: 1,
    6: 1,
    8: 2,
    9: 1
};
const loopsInside = (digits = 689210) => {
    let counter = 0;
    // console.time();
    for (let digit of digits.toString()) {
        if (digit in loops)
            counter += loops[digit];
    }
    // digits.toString().split('').map( digit => {
    //     if(digit in loops) counter += loops[digit];
    // } )
    // console.timeEnd();
    return counter;
};
exports.default = loopsInside;
