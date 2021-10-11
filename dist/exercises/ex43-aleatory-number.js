"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aleatoryNumberExFour = exports.aleatoryNumberExThree = exports.aleatoryNumberExTwo = exports.aleatoryNumberExOne = exports.aleatoryNumberFloat = exports.aleatoryNumber = void 0;
// int numbers (between min - max)
const aleatoryNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.aleatoryNumber = aleatoryNumber;
// Float numbers (between min - max not included)
const aleatoryNumberFloat = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.aleatoryNumberFloat = aleatoryNumberFloat;
// 0 -> 10
const aleatoryNumberExOne = () => {
    return Math.floor(Math.random() * 11);
};
exports.aleatoryNumberExOne = aleatoryNumberExOne;
// 1 -> 10
const aleatoryNumberExTwo = () => {
    return Math.floor(Math.random() * 11) + 1;
};
exports.aleatoryNumberExTwo = aleatoryNumberExTwo;
// 5 -> 16
const aleatoryNumberExThree = () => {
    return Math.floor(Math.random() * 17) + 5;
};
exports.aleatoryNumberExThree = aleatoryNumberExThree;
// -10 -> -2
const aleatoryNumberExFour = () => {
    return Math.floor(Math.random() * 9) - 10;
};
exports.aleatoryNumberExFour = aleatoryNumberExFour;
