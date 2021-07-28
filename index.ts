import * as basicHelpers from './shared/helpers/basic-helpers';
import { countWords } from './exercises/ex1-words-counter';
import { multiplyNumbers } from './exercises/ex2-multiplication-table';
import { isPalindrome } from './exercises/ex3-palindrome';
import { countEspecificWord } from './exercises/ex4-word-counter';

console.log("Job Interview exercises in TypeScript");

// ------------------------------------------------------------------------------------- //
// Ex 1: Count words from pre-defined text
console.log("Ex 1: Count words from pre-defined text \n" +
    "---------------------------------------");
const testText: string = " Hi! my name is name and this is " +
    "this a text with words! and repetitive WordS!, and anD, " +
    "is writteN like this WrittEn to check!!!! ";
console.log(countWords(testText));
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 2: Create the multiplication table of a specific number
console.log("Ex 2: Create the multiplication table of a specific number \n" +
            "----------------------------------------------------------");
basicHelpers.printTextListResults(multiplyNumbers(5));
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 3: Find out if a string is palindrome or not
console.log("Ex 3: Find out if a string is palindrome or not \n" +
            "-----------------------------------------------");
console.log("otto is a Palindrome?: ", isPalindrome('otto'));
// ------------------------------------------------------------------------------------- //

// ------------------------------------------------------------------------------------- //
// Ex 4: Given a string and a search word determinate if this word appears in the string.
console.log("Ex 4: Find out if a string has a search word and it\'s number of appearances \n" +
            "----------------------------------------------------------------------------");
const textEx4: string = "Hi this is an example text, text, text.";
console.log("Word \"text\" appears in string this number of times: ", 
            countEspecificWord(textEx4, "text"));
// ------------------------------------------------------------------------------------- //

