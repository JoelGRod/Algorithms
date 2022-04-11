const powerOfTwoNaive = (testNumber) => {
    while(testNumber > 1) {
        if(testNumber % 2 !== 0) return false;
        testNumber /= 2;
    }
    return testNumber === 1 ? true : false;
}

const powerOfTwo = (testNumber) => {
    if(testNumber < 1) return false;
    return (testNumber & (testNumber -1)) === 0;
}

console.log(
    `1024: ${powerOfTwoNaive(1024)} 
     1025: ${powerOfTwoNaive(1025)}
     0: ${powerOfTwoNaive(0)}
     1: ${powerOfTwoNaive(1)}
     2: ${powerOfTwoNaive(2)}
     4: ${powerOfTwoNaive(4)}
     8: ${powerOfTwoNaive(8)}
     9: ${powerOfTwoNaive(9)}
     16: ${powerOfTwoNaive(16)}
     18: ${powerOfTwoNaive(18)}`
)

console.log(
    `1024: ${powerOfTwo(1024)} 
     1025: ${powerOfTwo(1025)}
     0: ${powerOfTwo(0)}
     1: ${powerOfTwo(1)}
     2: ${powerOfTwo(2)}
     4: ${powerOfTwo(4)}
     8: ${powerOfTwo(8)}
     9: ${powerOfTwo(9)}
     16: ${powerOfTwo(16)}
     18: ${powerOfTwo(18)}`
)
