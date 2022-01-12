/**
 * PALINDROME SEQUENCE AND SCORE
 */


"use strict";
/*
 * Complete the 'maxScore' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function isPalindrome(text) {
  const reverseWord = text.split("").reverse().join("");
  return text === reverseWord && text.length;
}

function palindromeSub(s) {
    let result = [];
    const allPalindromes = ([char, ...rest], right = '') => {
        if (isPalindrome(right) && !result.includes(right)) result.push(right);
        if (!char) return;
        allPalindromes(rest, right + char);
        allPalindromes(rest, right);
    }
    allPalindromes([...s]);
    return result;
}

/*function getPalindromesSubsequence(s) {
  var permuteArray = [];
  function swap(str, firstChar, secondChar) {
    var temp = str[firstChar];
    str[firstChar] = str[secondChar];
    str[secondChar] = temp;
    return str;
  }
  function permute(a, sIndex, eIndex) {
    if (sIndex == eIndex) {
      permuteArray.push(a.join(""));
    } else {
      for (var i = sIndex; i < eIndex + 1; i++) {
        a = swap(a, sIndex, i);
        permute(a, sIndex + 1, eIndex);
        a = swap(a, i, sIndex);
      }
    }
  }
  function isPalindrome(inputString) {
    if (inputString === inputString.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
  function getDistinctPalindromes(inputArray) {
    var x,
      subString,
      distPali = [];
    for (x in inputArray) {
      //make different sub strings and check if it is palindrome or not
      for (var i = 0; i < inputArray[x].length; i++) {
        for (var j = i + 2; j <= inputArray[x].length; j++) {
          subString = inputArray[x].slice(i, j);
          if (isPalindrome(subString) && !distPali.includes(subString)) {
            distPali.push(subString);
          }
        }
      }
    }
    return distPali;
  }
  let str = s.split("");
  var startIndex = 0;
  var endIndex = str.length - 1;
  permute(str, startIndex, endIndex);
  return getDistinctPalindromes(permuteArray);
}*/

// MAIN FUNCTION
function maxScore(s) {
  // Write your code here
  let result = palindromeSub(s);
//   let result = getPalindromesSubsequence(s);
//   console.log(result);

  let first = result.reduce((a, b) => (a.length > b.length ? a : b));

  const regExp = new RegExp(`[${first}]`, "gi");
  result = result.filter((value) => !value.match(regExp));

  let second = result.reduce((a, b) => (a.length > b.length ? a : b));

  return first.length * second.length;
}
