/**
 * Draw a hollow square in console with asterisks
 */

export function drawSquare(size: number): string {
    let square: string = "";

    square = drawSideRecursive(size, "*");
    
    for(let i = 0; i < size - 2; i++) {
        square += "*";
        square += drawInnerRecursive(size - 2, " ");
        square += "*\n";
    }
    
    square += drawSideRecursive(size, "*");

    return square;
}

function drawSideRecursive(size: number, symbol: string): string {
    if(size === 1) return symbol + "\n";
    return symbol + drawSideRecursive(size - 1, symbol);
}

function drawInnerRecursive(size: number, symbol: string): string {
    if(size === 1) return symbol;
    return symbol + drawInnerRecursive(size - 1, symbol);
}

// function drawInnerSide(size: number) {
//     let innerSide: string = "*";
//     for(let i = 0; i < size - 2; i++) {
//         innerSide += " ";
//     }
//     innerSide += "*\n";
//     return innerSide;
// }

// function drawOuterSide(size: number) {
//     let side: string = "";
//     for(let i = 0; i < size; i++) {
//         side += "*";
//     }
//     return side;
// }

