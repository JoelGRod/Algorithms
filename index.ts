import * as basicHelpers from './shared/helpers/basic-helpers';
import { countWords } from './exercises/ex1-words-counter';
import { multiplyNumbers } from './exercises/ex2-multiplication-table';
import { isPalindrome } from './exercises/ex3-palindrome';
import { countEspecificWord } from './exercises/ex4-word-counter';
import { reverseString } from './exercises/ex5-text-reverse-control-est';
import { calculatePercentage } from './exercises/ex6-calculate-percentage';
import { drawSquare } from './exercises/ex7-draw-square';

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

