
const squareNumbers = (squareNumber: number): {[key: string]: number} => {

    const squared: {[key: string]: number} = {};

    for(let i = 1; i <= squareNumber; i++) {
        squared[`${i} ^ 2`] = Math.pow(i, 2);
    }

    return squared;

}

export default squareNumbers;