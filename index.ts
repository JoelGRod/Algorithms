import * as wordsCounter from './exercises/words-counter';

console.log("Job Interview exercises in TypeScript");

// Ex 1: Count words from pre-defined text
const testText: string = " Hi! my name is name and this is " +
"this a text with words! and repetitive WordS!, and anD, " +
"is writteN like this WrittEn to check!!!! ";
console.log(wordsCounter.countWords(testText));

