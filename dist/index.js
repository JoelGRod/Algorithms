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
const wordsCounter = __importStar(require("./exercises/ex1-words-counter"));
console.log("Job Interview exercises in TypeScript");
// Ex 1: Count words from pre-defined text
console.log("Ex 1: Count words from pre-defined text \n" +
    "---------------------------------------");
const testText = " Hi! my name is name and this is " +
    "this a text with words! and repetitive WordS!, and anD, " +
    "is writteN like this WrittEn to check!!!! ";
console.log(wordsCounter.countWords(testText));
// Ex 2: Create the multiplication table of a specific number
