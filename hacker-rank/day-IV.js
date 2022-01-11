/**
 * Grid Challenge
 * ALPHABETIC ORDER IN GRID
 * Given a square grid of characters in the range ascii[a-z],
 * rearrange elements of each row alphabetically, ascending.
 * Determine if the columns are also in ascending alphabetical
 * order, top to bottom. Return YES if they are or NO if they are not.
 *
 * Example
 * grid = ['abc', 'ade', 'efg']
 * The grid is illustrated below.
 * a b c
 * a d e
 * e f g
 * The rows are already in alphabetical order.
 * The columns a a e, b d f and c e g are also in alphabetical order,
 * so the answer would be YES. Only elements within the same row can
 * be rearranged. They cannot be moved to a different row.
 *
 * Sample Input
 * STDIN   Function
 * -----   --------
 * 1       t = 1
 * 5       n = 5
 * ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
 * fghij
 * olmkn
 * trpqs
 * xywuv
 *
 * Sample Output
 * YES
 *
 * Explanation
 * The 5x5 grid in the  test case can be reordered to
 * abcde
 * fghij
 * klmno
 * pqrst
 * uvwxy
 *
 * This fulfills the condition since the rows 1, 2, ..., 5
 * and the columns 1, 2, ..., 5 are all alphabetically sorted.
 */

function gridChallenge(grid) {
  // Write your code here
  const texts = grid.map((el) => {
    return el.split("").sort().join("");
  });
  for (let row in texts) {
    if (row == 0) continue;
    for (let col in texts[row]) {
      if (texts[row][col] < texts[row - 1][col]) return "NO";
    }
  }
  return "YES";
}

/**
 * Recursive Digit Sum
 * SUPER DIGIT RECURSIVE
 * We define super digit of an integer x using the following rules:
 * Given an integer, we need to find the super digit of the integer.
 *
 * If x has only 1 digit, then its super digit is x.
 * Otherwise, the super digit of x is equal to the super digit of
 * the sum of the digits of x.
 *
 * For example, the super digit of 9875 will be calculated as:
 * 	super_digit(9875)   	9+8+7+5 = 29
 * 	super_digit(29) 	2 + 9 = 11
 * 	super_digit(11)		1 + 1 = 2
 * 	super_digit(2)		= 2
 *
 * Example
 * n = 9875
 * k = 4
 * The number p is created by concatenating the string n k times so the initial:
 * p = 9875987598759875
 *     superDigit(p) = superDigit(9875987598759875)
 *                   9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
 *     superDigit(p) = superDigit(116)
 *                   1+1+6 = 8
 *     superDigit(p) = superDigit(8)
 */

function superDigit(n, k) {
  // Write your code here
  const result =
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((accum, current) => accum + current, 0) * k;
  return result <= 9 ? result : superDigit(result, 1);
}

/**
 * New Year Chaos
 * FIND BRIBES in QUEUE
 * It is New Year's Day and people are in line for the
 * Wonderland rollercoaster ride. Each person wears a
 * sticker indicating their initial position in the queue
 * from 1 to n. Any person can bribe the person directly
 * in front of them to swap positions, but they still wear
 * their original sticker. One person can bribe at most two others.
 *
 * Determine the minimum number of bribes that took place to
 * get to a given queue order. Print the number of bribes, or,
 * if anyone has bribed more than two people, print Too chaotic.
 *
 * Example
 * [1,2,3,5,4,6,7,8]
 *
 * If person 5 bribes person 4, the queue will look like this:
 * [1,2,3,5,4,6,7,8]
 * Only 1 bribe is required. Print 1.
 *
 * [4,1,2,3]
 * Person 4 had to bribe 3 people to get to the current position.
 * Print Too chaotic.
 */

function minimumBribes(q) {
  // Write your code here
  let result = 0;
  let badResult = false;

  // BAD
  /*const original = [...q];
    q.sort();
    
    for(let i = 0; i < q.length; i++) {
        let temp = q[i] - original[i];
        if(Math.abs(temp) > 2) {
            badResult = true;
            break;
        };
        if(temp < 0) continue;
        result += temp;
    }*/

  // BAD
  /*for(let i = q.length - 1; i >= 0; i--) {
        if(q[i] < i + 1) continue;
        if(q[i] - (i + 1) > 2) {
            badResult = true;
            break;
        }
        result += q[i] - (i + 1);
    }*/

  // GOOD ALMOST EFFICIENT
  let counter = 0;
  for (let i = 0; i < q.length; i++) {
    if (badResult) break;
    result += counter;
    counter = 0;
    for (let j = i + 1; j < q.length; j++) {
      if (q[i] > q[j]) counter++;
      if (counter > 2) {
        badResult = true;
        break;
      }
    }
  }

  badResult ? console.log("Too chaotic") : console.log(result);

  //console.log(findBribes(q));

  //findBribesTwo(q);
}

// BAD
function findBribes(q) {
  let result = 0;
  while (q.length >= 1) {
    let [user] = q.splice(0, 1);
    let bribes = q.reduce(
      (accum, curr) => (user > curr ? accum + 1 : accum + 0),
      0
    );
    if (bribes > 2) {
      return "Too chaotic";
    } else {
      result += bribes;
    }
  }
  return result;
}

// GREAT - MORE EFFICIENT ++
function findBribesTwo(q) {
  let bribe = 0;
  let wtf = [];
  let first = 0;
  for (let i = 0; i < q.length; i++) {
    for (let j = first; j < q.length - i - 1; j++) {
      if (q[j] - 1 === j && j === first + 1) first++;
      if (q[j] > q[j + 1]) {
        wtf[q[j]] = wtf[q[j]] === undefined ? 1 : wtf[q[j]] + 1;
        if (wtf[q[j]] > 2) {
          console.log("Too chaotic");
          return;
        }
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        bribe++;
        if (q[j + 1] - 1 === j) j = q.length;
      }
    }
  }
  console.log(bribe);
}
