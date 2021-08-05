"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const basicHelpers = __importStar(require("./shared/helpers/basic-helpers"));
const ex1_words_counter_1 = require("./exercises/ex1-words-counter");
const ex2_multiplication_table_1 = require("./exercises/ex2-multiplication-table");
const ex3_palindrome_1 = require("./exercises/ex3-palindrome");
const ex4_word_counter_1 = require("./exercises/ex4-word-counter");
const ex5_text_reverse_control_est_1 = require("./exercises/ex5-text-reverse-control-est");
const ex6_calculate_percentage_1 = require("./exercises/ex6-calculate-percentage");
const ex7_draw_square_1 = require("./exercises/ex7-draw-square");
const ex8_show_odd_numbers_1 = require("./exercises/ex8-show-odd-numbers");
const ex9_invert_number_1 = require("./exercises/ex9-invert-number");
const ex10_array_common_values_1 = require("./exercises/ex10-array-common-values");
const ex11_show_stair_1 = require("./exercises/ex11-show-stair");
const ex12_replace_specific_word_1 = require("./exercises/ex12-replace-specific-word");
const ex13_regressive_eight_1 = require("./exercises/ex13-regressive-eight");
const ex14_divide_arrays_1 = require("./exercises/ex14-divide-arrays");
const ex15_repeat_string_1 = require("./exercises/ex15-repeat-string");
const ex16_most_used_chars_1 = require("./exercises/ex16-most-used-chars");
const ex17_count_vowels_1 = require("./exercises/ex17-count-vowels");
const ex18_fizz_buzz_1 = require("./exercises/ex18-fizz-buzz");
const ex19_show_dividers_1 = require("./exercises/ex19-show-dividers");
const ex20_show_movies_1 = require("./exercises/ex20-show-movies");
const ex21_check_anagram_1 = require("./exercises/ex21-check-anagram");
const ex22_cut_text_1 = require("./exercises/ex22-cut-text");
const ex23_bigger_number_1 = require("./exercises/ex23-bigger-number");
const ex24_title_case_1 = require("./exercises/ex24-title-case");
const ex25_permutation_1 = require("./exercises/ex25-permutation");
const ex26_upper_lower_case_1 = require("./exercises/ex26-upper-lower-case");
console.log("Job Interview exercises in TypeScript");
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// Ex 1: Count words from pre-defined text
console.log("Ex 1: Count words from pre-defined text \n" +
    "---------------------------------------");
const testText = " Hi! my name is name and this is " +
    "this a text with words! and repetitive WordS!, and anD, " +
    "is writteN like this WrittEn to check!!!! ";
console.log(ex1_words_counter_1.countWords(testText));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 2: Create the multiplication table of a specific number
console.log("Ex 2: Create the multiplication table of a specific number \n" +
    "----------------------------------------------------------");
basicHelpers.printTextListResults(ex2_multiplication_table_1.multiplyNumbers(5));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 3: Find out if a string is palindrome or not
console.log("Ex 3: Find out if a string is palindrome or not \n" +
    "-----------------------------------------------");
console.log("otto is a Palindrome?: ", ex3_palindrome_1.isPalindrome('otto'));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 4: Given a string and a search word determinate if this word appears in the string.
console.log("Ex 4: Find out if a string has a search word and it\'s number of appearances \n" +
    "----------------------------------------------------------------------------");
const textEx4 = "Hi this is an example text, text, text.";
console.log("Word \"text\" appears in string this number of times: ", ex4_word_counter_1.countEspecificWord(textEx4, "text"));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 5: Given a string reverse it using control structures only.
console.log("Ex 5: Given a string reverse it using control structures only \n" +
    "-------------------------------------------------------------");
const textEx5 = "My son it\'s so beautiful and Happy Baby!!!";
console.log(`${textEx5} reversed is: `, ex5_text_reverse_control_est_1.reverseString(textEx5));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 6: Given a string reverse it using control structures only.
console.log("Ex 6: Given a number and a percentage and returns the calculation \n" +
    "-----------------------------------------------------------------");
const ex6Digit = 200;
const ex6Percent = 20;
console.log(`${ex6Percent}% of ${ex6Digit} is: `, ex6_calculate_percentage_1.calculatePercentage(ex6Digit, ex6Percent));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 7: Draw a hollow square in console with asterisks.
console.log("Ex 7: Draw a hollow square in console with asterisks \n" +
    "----------------------------------------------------");
console.log(ex7_draw_square_1.drawSquare(4));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 8: Return total odd numbers between two digits.
console.log("Ex 8: Return total odd numbers between two digits \n" +
    "-------------------------------------------------");
const ex8Min = 1;
const ex8Max = 10;
console.log(`Total odd numbers between ${ex8Min} and ${ex8Max}: `, ex8_show_odd_numbers_1.getOddNumbers(ex8Min, ex8Max));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 9: Invert a number and return it: 59 -> 95.
console.log("Ex 9: Invert a number and return it: 59 -> 95 \n" +
    "---------------------------------------------");
const ex9Digit = -59;
console.log(`The number ${ex9Digit} inverted is: `, ex9_invert_number_1.invertNumber(ex9Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 10: Return an array with the common values between two arrays (no duplicates).
console.log("Ex 10: Return an array with the common values between two arrays (no duplicates) \n" +
    "--------------------------------------------------------------------------------");
const ex10FirstList = [1, 2, 3, 5, 4, 5];
const ex10SecondList = [8, 7, 10, 5, 4, 5];
console.log(`The common values between ${ex10FirstList} and ${ex10SecondList} are: `, ex10_array_common_values_1.findCommonValues(ex10FirstList, ex10SecondList));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 11: Print a stair with the number of steps defined by argument.
console.log("Ex 11: Print a stair with the number of steps defined by argument. \n" +
    "------------------------------------------------------------------");
const ex11Steps = 6;
console.log(ex11_show_stair_1.createStair(ex11Steps));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 12: Given a text and a search word, replace each occurrence of the word with CENSORED.
console.log("Ex 12: Given a text and a search word, replace each occurrence of the word with CENSORED. \n" +
    "----------------------------------------------------------------------------------------");
const ex12Text = "We need not to say BaD words because baD words are bad.";
const ex12Word = "bad";
console.log(ex12_replace_specific_word_1.censorWord(ex12Text, ex12Word));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 13: Regressive counting by 8
console.log("Ex 13: Regressive counting by 8 \n" +
    "----------------------------------------------------------------------------------------");
const ex13Digit = 100;
console.log(ex13_regressive_eight_1.regressiveEight(ex13Digit));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 14: Divides an array in subarrays
console.log("Ex 14: Divides an array in subarrays \n" +
    "------------------------------------");
const ex14List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(ex14_divide_arrays_1.divideArrays(ex14List, 3));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 15: Repeat a string certain number of times
console.log("Ex 15: Repeat a string certain number of times \n" +
    "----------------------------------------------");
const ex15Text = "hello";
const ex15Repetition = 6;
console.log(ex15_repeat_string_1.repeatString(ex15Text, ex15Repetition));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 16: Find the most used char in a text
console.log("Ex 16: Find the most used char in a text \n" +
    "----------------------------------------");
const ex16Text = "Most used word is... i dont know";
console.log(`The most used char is: ${ex16_most_used_chars_1.findMostUsedChar(ex16Text)}`);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 17: Count the number of vowels in a text
console.log("Ex 17: Count the number of vowels in a text \n" +
    "-------------------------------------------");
const ex17Text = "Most used word is... i dont know";
console.log(`Number of vowels: ${ex17_count_vowels_1.countVowels(ex17Text)}`);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 18: Fizz Buzz exercise
console.log("Ex 18: Fizz Buzz exercise \n" +
    "-------------------------");
const ex18Number = 100;
ex18_fizz_buzz_1.printFizzBuzz(ex18Number);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 19: Show dividers of a number
console.log("Ex 19: Show dividers of a number \n" +
    "--------------------------------");
const ex19Number = 10;
ex19_show_dividers_1.showDividers(ex19Number);
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
ex20_show_movies_1.printFilmsByView(ex20MoviesList);
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 21: Given two string, check if the second one is an anagram of the first one
console.log("Ex 21: Given two string, check if the second one is an anagram of the first one \n" +
    "-------------------------------------------------------------------------------");
const ex21TextOne = "Sergio";
const ex21TextTwo = "Riesgo";
console.log(`${ex21TextOne} is an anagram of ${ex21TextTwo}? `, ex21_check_anagram_1.isAnagram(ex21TextOne, ex21TextTwo));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 22: Given a string and a number, returns the string with only the specified number of characters
console.log("Ex 22: Given a string and a number, returns the string with only the specified number of characters \n" +
    "---------------------------------------------------------------------------------------------------");
const ex22text = "This is a test string for the exercise";
const ex22number = 6;
console.log(`The first ${ex22number} characters of "${ex22text}" are: `, ex22_cut_text_1.cutText(ex22text, ex22number));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 23: Given a two numbers, define which is bigger and which is smaller
console.log("Ex 23: Given a two numbers, define which is bigger and which is smaller \n" +
    "-----------------------------------------------------------------------");
const ex23digitOne = 18;
const ex23digitTwo = 10;
console.log(ex23_bigger_number_1.printBiggerSmaller(ex23digitOne, ex23digitTwo));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 24: Given a string, returns it converted to Title Case
console.log("Ex 24: Given a string, returns it converted to Title Case \n" +
    "---------------------------------------------------------");
const ex24Text = "this is a test string";
console.log(ex24_title_case_1.toTitleCaseRegExp(ex24Text));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 25: Given a number array and a number, return true if the array values are a permutation of number, false otherwise.
console.log("Ex 25: Given a number array and a number, return true if the array values are a permutation of number. \n" +
    "------------------------------------------------------------------------------------------------------");
const ex25Numberlist = [1, 2, 3, 4, 5, 6];
const ex25Number = 6;
console.log(`Number list: ${ex25Numberlist}: Number: ${ex25Number}:`, ex25_permutation_1.isPermutation(ex25Numberlist, ex25Number));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// Ex 26: Given a text, return text to lowercase if the number of lowercase letters is greater than uppercase letters 
console.log("Ex 26: Given a text, return text to lowercase if the number of lowercase letters is greater than uppercase letters. \n" +
    "-------------------------------------------------------------------------------------------------------------------");
const ex26text = "THIS IS A TEST String";
console.log(`Text: ${ex26text} -> `, ex26_upper_lower_case_1.toUpperOrLowerCase(ex26text));
console.log('----------------------------------------------------------------');
// ------------------------------------------------------------------------------------- //
