interface HighLow {
  lower: number;
  higher: number;
}

const arrayLowerHigher = (numbers: number[]): HighLow => {
  const response: HighLow = {
    lower: 0,
    higher: 0,
  };

  numbers.sort((a, b) => a - b);
  response.higher = numbers[numbers.length - 1];
  response.lower = numbers[0];

  return response;
};

export default arrayLowerHigher;
