"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEvenOdd = (numbers) => {
    const evenOdd = {
        even: [],
        odd: []
    };
    for (let number of numbers) {
        if (number % 2 === 0)
            evenOdd.even.push(number);
        else
            evenOdd.odd.push(number);
    }
    ;
    // numbers.map( number => {
    //     if(number % 2 === 0) even.push(number);
    //     else odd.push(number);
    // })
    return `
    Even: ${evenOdd.even}
    Odd: ${evenOdd.odd}
    `;
    // return {
    //     even: numbers.filter( number => number % 2 === 0),
    //     odd: numbers.filter( number => number % 2 !== 0)
    // }
};
exports.default = getEvenOdd;
