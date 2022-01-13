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
