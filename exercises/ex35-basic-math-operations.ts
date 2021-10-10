/**
 * Given two numbers return basic math oprations
 * ( + - * / ) between them
 */

const basicMathOperations = (one: number, two: number): string => {
  return `
  Sum: ${one + two}\n
  Subtraction: ${one - two}\n
  Multiplication: ${one * two}\n
  Division: ${one / two}
  `;
};

export default basicMathOperations;
