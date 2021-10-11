

const asterisksTriangle = ( digit: number ) => {
    
    const width = (digit * 2) - 1;
    let result = "";

    for( let row = 1; row <= digit; row++ ) {
        let paintedRow = "";
        let whiteSpaces = (digit - row) * 2;

        paintedRow += " ".repeat(whiteSpaces / 2);
        paintedRow += "*".repeat(width - whiteSpaces);
        paintedRow += " ".repeat(whiteSpaces / 2);
        
        result += `${paintedRow}\n`;
    }

    return result;

}

export default asterisksTriangle;