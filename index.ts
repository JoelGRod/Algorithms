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
import { printFilmsByView } from './exercises/ex20-show-movies';
import { isAnagram } from './exercises/ex21-check-anagram';
import { cutText } from './exercises/ex22-cut-text';
import { printBiggerSmaller } from './exercises/ex23-bigger-number';
import { toTitleCaseRegExp } from './exercises/ex24-title-case';
import { isPermutation } from './exercises/ex25-permutation';
import { toUpperOrLowerCase, toUpperOrLowerCaseAlt } from './exercises/ex26-upper-lower-case';
import { fibonacci, fiboRecursive, memoizedFibo } from './exercises/ex27-fibonacci';
import { getYearsMonthsDays } from './exercises/ex28-years-months-days-by-number';
import { factorial, factorialRecursive } from './exercises/ex29-factorial';
import { checkCapicua } from './exercises/ex30-check-capicua-numbers';
import { removeDuplicatesAndStrings } from './exercises/ex31-no-duplicates-no-strings';

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
console.log(repeatString(ex15Text, ex15Repetition));
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

// ------------------------------------------------------------------------------------- //
// Ex 20: Given a film list, show which films have been seen and which ones have not
console.log("Ex 20: Given a film list, show which films have been seen and which ones have not \n" +
    "-------------------------------------------------------------------------------");
const ex20MoviesList = [
    {
        title: "Spiderman",
        director: "Some Director",
        isViewed: true,
    },
    {
        title: "Star Wars - The Last One",
        director: "Some Director",
        isViewed: false,
    },
    {
        title: "The Light House",
        director: "Some Director",
        isViewed: true,
    },
    {
        title: "The Green Book",
        director: "Some Director",
        isViewed: true,
    },
    {
        title: "Captain Marvel",
        director: "Some Director",
        isViewed: false,
    }
];
printFilmsByView(ex20MoviesList);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 21: Given two string, check if the second one is an anagram of the first one
console.log("Ex 21: Given two string, check if the second one is an anagram of the first one \n" +
            "-------------------------------------------------------------------------------");
const ex21TextOne = "Sergio";
const ex21TextTwo = "Riesgo";
console.log(`${ex21TextOne} is an anagram of ${ex21TextTwo}? `, isAnagram(ex21TextOne, ex21TextTwo));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 22: Given a string and a number, returns the string with only the specified number of characters
console.log("Ex 22: Given a string and a number, returns the string with only the specified number of characters \n" +
            "---------------------------------------------------------------------------------------------------");
const ex22text = "This is a test string for the exercise";
const ex22number = 6;
console.log(`The first ${ex22number} characters of "${ex22text}" are: `, cutText(ex22text, ex22number));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 23: Given a two numbers, define which is bigger and which is smaller
console.log("Ex 23: Given a two numbers, define which is bigger and which is smaller \n" +
            "-----------------------------------------------------------------------");
const ex23digitOne = 18;
const ex23digitTwo = 10;
console.log(printBiggerSmaller(ex23digitOne, ex23digitTwo));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 24: Given a string, returns it converted to Title Case
console.log("Ex 24: Given a string, returns it converted to Title Case \n" +
            "---------------------------------------------------------");
const ex24Text: string = "this is a test string";
console.log(toTitleCaseRegExp(ex24Text));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 25: Given a number array and a number, return true if the array values are a permutation of number, false otherwise.
console.log("Ex 25: Given a number array and a number, return true if the array values are a permutation of number. \n" +
            "------------------------------------------------------------------------------------------------------");
const ex25Numberlist: number[] = [1, 2, 3, 4, 5, 6];
const ex25Number: number = 6;
console.log(`Number list: ${ex25Numberlist}: Number: ${ex25Number}:`,isPermutation(ex25Numberlist, ex25Number));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 26: Given a text, return text to lowercase if the number of lowercase letters is greater than uppercase letters 
console.log("Ex 26: Given a text, return text to lowercase if the number of lowercase letters is greater than uppercase letters. \n" +
            "-------------------------------------------------------------------------------------------------------------------");
const ex26text: string = "THIS IS A TEST String";
console.log(`Text: ${ex26text} -> `, toUpperOrLowerCase(ex26text));
console.log(`Text: ${ex26text} -> `, toUpperOrLowerCaseAlt(ex26text));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 27: Given a number, return fibonacci sequence + result 
console.log("Ex 27: Given a number, return fibonacci sequence + result. \n" +
            "---------------------------------------------------------");
const ex27Digit: number = 10;
console.log(fibonacci(ex27Digit));
console.log(fiboRecursive(ex27Digit));
console.log(memoizedFibo(ex27Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 28: Given a number (days), return years, months and days passed
console.log("Ex 28: Given a number (days), return years, months and days passed. \n" +
            "------------------------------------------------------------------");
const ex28Digit: number = 920;
console.log(getYearsMonthsDays(ex28Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 29: Given a number return the factorial
console.log("Ex 29: Given a number return the factorial. \n" +
            "------------------------------------------");
const ex29Digit: number = 10;
console.log(factorial(ex29Digit));
console.log(factorialRecursive(ex29Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 30: Given a number return true if capicua, false otherwise
console.log("Ex 30: Given a number return true if capicua, false otherwise. \n" +
            "--------------------------------------------------------------------");
const ex30DigitCapicua: number = 1991;
const ex30DigitNonCapicua: number = 2014;
console.log(checkCapicua(ex30DigitCapicua));
console.log(checkCapicua(ex30DigitNonCapicua));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 31: Given a number array return the same array without strings and duplicates
console.log("Ex 31: Given a number array return the same array without strings and duplicates. \n" +
            "--------------------------------------------------------------------------------");
const ex31list: any = [5, 5, 10000, 56000, "hello", 45, "Hi", "SOme string", 87, 56000, 45];
console.log(removeDuplicatesAndStrings(ex31list));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
