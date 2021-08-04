"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagram = void 0;
function convertTextToCharList(text) {
    return text.toLowerCase().trim().split('').sort();
}
function isAnagram(textOne, textTwo) {
    const textOneList = convertTextToCharList(textOne);
    const textTwoList = convertTextToCharList(textTwo);
    return Array.isArray(textOneList) &&
        Array.isArray(textTwoList) &&
        textOneList.length === textTwoList.length &&
        textOneList.every((char, index) => char === textTwoList[index]);
}
exports.isAnagram = isAnagram;
