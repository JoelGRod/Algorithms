import { countWords } from './exercises/ex1-words-counter';
import * as ex2 from './exercises/ex2-multiplication-table';

console.log("Job Interview exercises in TypeScript");

// Ex 1: Count words from pre-defined text
console.log("Ex 1: Count words from pre-defined text \n" +
    "---------------------------------------");
const testText: string = " Hi! my name is name and this is " +
    "this a text with words! and repetitive WordS!, and anD, " +
    "is writteN like this WrittEn to check!!!! ";
console.log(countWords(testText));

// Ex 2: Create the multiplication table of a specific number
console.log("Ex 2: Create the multiplication table of a specific number \n" +
            "----------------------------------------------------------");
ex2.printResults(ex2.multiplyNumbers(5));


