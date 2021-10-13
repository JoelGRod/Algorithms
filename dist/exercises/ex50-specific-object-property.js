"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPropertyInObject = (anObject, property) => {
    // return Object.keys(anObject).includes(property);
    return anObject.hasOwnProperty(property);
};
exports.default = isPropertyInObject;
