"use strict";
/**
 * Draw a hollow square in console with asterisks
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawSquare = exports.drawSquareRecursion = void 0;
/** --------------------------------------------------------------- */
// Recursion way (Tests fail?)
function drawSquareRecursion(size) {
    let square = "";
    square = drawSideRecursive(size, "*");
    for (let i = 0; i < size - 2; i++) {
        square += "*";
        square += drawInnerRecursive(size - 2, " ");
        square += "*\n";
    }
    square += drawSideRecursive(size, "*");
    return square;
}
exports.drawSquareRecursion = drawSquareRecursion;
function drawSideRecursive(size, symbol) {
    if (size === 1)
        return symbol + "\n";
    return symbol + drawSideRecursive(size - 1, symbol);
}
function drawInnerRecursive(size, symbol) {
    if (size === 1)
        return symbol;
    return symbol + drawInnerRecursive(size - 1, symbol);
}
/** --------------------------------------------------------------- */
/** --------------------------------------------------------------- */
// Non recursive way (Tests pass)
function drawSquare(size) {
    let square = "";
    square += drawOuterSide(size) + "\n";
    for (let i = 0; i < size - 2; i++) {
        square += drawInnerSide(size);
    }
    square += drawOuterSide(size);
    return square;
}
exports.drawSquare = drawSquare;
function drawInnerSide(size) {
    let innerSide = "*";
    for (let i = 0; i < size - 2; i++) {
        innerSide += " ";
    }
    innerSide += "*\n";
    return innerSide;
}
function drawOuterSide(size) {
    let side = "";
    for (let i = 0; i < size; i++) {
        side += "*";
    }
    return side;
}
/** --------------------------------------------------------------- */
