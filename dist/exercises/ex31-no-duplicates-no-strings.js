"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatesAndStrings = void 0;
function removeDuplicatesAndStrings(list) {
    list = list.filter(element => typeof element === "number");
    return Array.from(new Set(list));
}
exports.removeDuplicatesAndStrings = removeDuplicatesAndStrings;
