import * as basicHelpers from './shared/helpers/basic-helpers';
import { countWords } from './exercises/ex1-words-counter';
import { multiplyNumbers } from './exercises/ex2-multiplication-table';
import { isPalindrome } from './exercises/ex3-palindrome';
import { countEspecificWord } from './exercises/ex4-word-counter';
import { reverseString } from './exercises/ex5-text-reverse-control-est';
import { calculatePercentage } from './exercises/ex6-calculate-percentage';
import { drawSquare } from './exercises/ex7-draw-square';
import { getOddNumbers } from './exercises/ex8-show-odd-numbers';
import { invertNumber } from './exercises/ex9-invert-number';
import { findCommonValues } from './exercises/ex10-array-common-values';
import { createStair } from './exercises/ex11-show-stair';
import { censorWord } from './exercises/ex12-replace-specific-word';
import { regressiveEight } from './exercises/ex13-regressive-eight';
import { divideArrays } from './exercises/ex14-divide-arrays';
import { repeatString } from './exercises/ex15-repeat-string';
import { findMostUsedChar } from './exercises/ex16-most-used-chars';
import { countVowels } from './exercises/ex17-count-vowels';
import { printFizzBuzz } from './exercises/ex18-fizz-buzz';
import { showDividers } from './exercises/ex19-show-dividers';

console.log("Job Interview exercises in TypeScript");
console.log('----------------------------------------------------------------');

// ------------------------------------------------------------------------------------- //
// Ex 1: Count words from pre-defined text
console.log("Ex 1: Count words from pre-defined text \n" +
    "---------------------------------------");
const testText: string = " Hi! my name is name and this is " +
    "this a text with words! and repetitive WordS!, and anD, " +
    "is writteN like this WrittEn to check!!!! ";
console.log(countWords(testText));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 2: Create the multiplication table of a specific number
console.log("Ex 2: Create the multiplication table of a specific number \n" +
    "----------------------------------------------------------");
basicHelpers.printTextListResults(multiplyNumbers(5));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 3: Find out if a string is palindrome or not
console.log("Ex 3: Find out if a string is palindrome or not \n" +
    "-----------------------------------------------");
console.log("otto is a Palindrome?: ", isPalindrome('otto'));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 4: Given a string and a search word determinate if this word appears in the string.
console.log("Ex 4: Find out if a string has a search word and it\'s number of appearances \n" +
    "----------------------------------------------------------------------------");
const textEx4: string = "Hi this is an example text, text, text.";
console.log("Word \"text\" appears in string this number of times: ",
    countEspecificWord(textEx4, "text"));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 5: Given a string reverse it using control structures only.
console.log("Ex 5: Given a string reverse it using control structures only \n" +
    "-------------------------------------------------------------");
const textEx5: string = "My son it\'s so beautiful and Happy Baby!!!";
console.log(`${textEx5} reversed is: `, reverseString(textEx5));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 6: Given a string reverse it using control structures only.
console.log("Ex 6: Given a number and a percentage and returns the calculation \n" +
    "-----------------------------------------------------------------");
const ex6Digit: number = 200;
const ex6Percent: number = 20;
console.log(`${ex6Percent}% of ${ex6Digit} is: `, calculatePercentage(ex6Digit, ex6Percent));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 7: Draw a hollow square in console with asterisks.
console.log("Ex 7: Draw a hollow square in console with asterisks \n" +
    "----------------------------------------------------");
console.log(drawSquare(4));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 8: Return total odd numbers between two digits.
console.log("Ex 8: Return total odd numbers between two digits \n" +
    "-------------------------------------------------");
const ex8Min: number = 1;
const ex8Max: number = 10;
console.log(`Total odd numbers between ${ex8Min} and ${ex8Max}: `,
    getOddNumbers(ex8Min, ex8Max));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 9: Invert a number and return it: 59 -> 95.
console.log("Ex 9: Invert a number and return it: 59 -> 95 \n" +
    "---------------------------------------------");
const ex9Digit: number = -59;
console.log(`The number ${ex9Digit} inverted is: `,
    invertNumber(ex9Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 10: Return an array with the common values between two arrays (no duplicates).
console.log("Ex 10: Return an array with the common values between two arrays (no duplicates) \n" +
    "--------------------------------------------------------------------------------");
const ex10FirstList: number[] = [1, 2, 3, 5, 4, 5];
const ex10SecondList: number[] = [8, 7, 10, 5, 4, 5];
console.log(`The common values between ${ex10FirstList} and ${ex10SecondList} are: `,
    findCommonValues(ex10FirstList, ex10SecondList));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 11: Print a stair with the number of steps defined by argument.
console.log("Ex 11: Print a stair with the number of steps defined by argument. \n" +
    "------------------------------------------------------------------");
const ex11Steps: number = 6;
console.log(createStair(ex11Steps));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 12: Given a text and a search word, replace each occurrence of the word with CENSORED.
console.log("Ex 12: Given a text and a search word, replace each occurrence of the word with CENSORED. \n" +
    "----------------------------------------------------------------------------------------");
const ex12Text: string = "We need not to say BaD words because baD words are bad.";
const ex12Word: string = "bad";
console.log(censorWord(ex12Text, ex12Word));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 13: Regressive counting by 8
console.log("Ex 13: Regressive counting by 8 \n" +
    "----------------------------------------------------------------------------------------");
const ex13Digit: number = 100;
console.log(regressiveEight(ex13Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 14: Divides an array in subarrays
console.log("Ex 14: Divides an array in subarrays \n" +
            "------------------------------------");
const ex14List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(divideArrays(ex14List, 3));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 15: Repeat a string certain number of times
console.log("Ex 15: Repeat a string certain number of times \n" +
            "----------------------------------------------");
const ex15Text = "hello";
const ex15Repetition = 6;
console.log(repeatString(ex15Text, ex15Repetition ));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 16: Find the most used char in a text
console.log("Ex 16: Find the most used char in a text \n" +
            "----------------------------------------");
const ex16Text = "Most used word is... i dont know";
console.log(`The most used char is: ${findMostUsedChar(ex16Text)}`);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 17: Count the number of vowels in a text
console.log("Ex 17: Count the number of vowels in a text \n" +
            "-------------------------------------------");
const ex17Text = "Most used word is... i dont know";
console.log(`Number of vowels: ${countVowels(ex17Text)}`);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 18: Fizz Buzz exercise
console.log("Ex 18: Fizz Buzz exercise \n" +
            "-------------------------");
const ex18Number = 100;
printFizzBuzz(ex18Number);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 19: Show dividers of a number
console.log("Ex 19: Show dividers of a number \n" +
            "--------------------------------");
const ex19Number = 10;
showDividers(ex19Number);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
