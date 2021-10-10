"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getElementWithMoreOccurrences = (collection) => {
    const elementsCounter = {};
    const elementWithMore = {
        item: '',
        occurrences: 0
    };
    if (typeof collection === "string")
        collection = collection
            .toLowerCase()
            .replace(/[!.,;:_*¨ç+]/gi, '')
            .split(" ");
    collection.map(element => {
        if (element in elementsCounter)
            elementsCounter[element]++;
        else
            elementsCounter[element] = 1;
    });
    for (let element in elementsCounter) {
        if (elementsCounter[element] > elementWithMore.occurrences) {
            elementWithMore.item = element;
            elementWithMore.occurrences = elementsCounter[element];
        }
    }
    return elementWithMore;
};
exports.default = getElementWithMoreOccurrences;
