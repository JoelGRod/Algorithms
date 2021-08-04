"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagram = void 0;
function cleanText(text) {
    return text.toLowerCase().replace(/[^\w]gi/, '').trim().split('').sort().join('');
}
function isAnagram(textOne, textTwo) {
    return cleanText(textOne) === cleanText(textTwo);
}
exports.isAnagram = isAnagram;
// Example comparing arrays
// function convertTextToCharList(text: string): string[] {
//     return text.toLowerCase().replace(/[^\w]gi/, '').trim().split('').sort();
// }
// export function isAnagram(textOne: string, textTwo: string): boolean {
//     const textOneList = convertTextToCharList(textOne);
//     const textTwoList = convertTextToCharList(textTwo);
//     return Array.isArray(textOneList) &&
//            Array.isArray(textTwoList) &&
//            textOneList.length === textTwoList.length &&
//            textOneList.every( (char, index) => char === textTwoList[index]);
// }
