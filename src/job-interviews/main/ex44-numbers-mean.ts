
const getMean = ( ...numbers: number[] ) => {
    return numbers.reduce(
        (previous, current) => previous + current
    ) / numbers.length;
}

export default getMean;