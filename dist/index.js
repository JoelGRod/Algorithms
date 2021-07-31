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
