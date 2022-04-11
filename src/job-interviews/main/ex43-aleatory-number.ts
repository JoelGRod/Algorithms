
// int numbers (between min - max)
export const aleatoryNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Float numbers (between min - max not included)
export const aleatoryNumberFloat = ( min: number, max: number ) => {
    return Math.random() * ( max - min ) + min;
}

// 0 -> 10
export const aleatoryNumberExOne = () => {
    return Math.floor(Math.random() * 11);
}

// 1 -> 10
export const aleatoryNumberExTwo = () => {
    return Math.floor(Math.random() * 11) + 1;
}

// 5 -> 16
export const aleatoryNumberExThree = () => {
    return Math.floor(Math.random() * 17) + 5;
}

// -10 -> -2
export const aleatoryNumberExFour = () => {
    return Math.floor(Math.random() * 9) - 10;
}