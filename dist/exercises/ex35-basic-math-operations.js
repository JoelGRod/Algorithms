"use strict";
/**
 * Given two numbers return basic math oprations
 * ( + - * / ) between them
 */
Object.defineProperty(exports, "__esModule", { value: true });
const basicMathOperations = (one, two) => {
    return `
  Sum: ${one + two}\n
  Subtraction: ${one - two}\n
  Multiplication: ${one * two}\n
  Division: ${one / two}
  `;
};
exports.default = basicMathOperations;
