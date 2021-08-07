"use strict";
/**
 * Given a number array return every number to the power of two.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSquaredList = void 0;
const basic_helpers_1 = require("../shared/helpers/basic-helpers");
function getSquaredList(list) {
    return basic_helpers_1.filterList("number", list).map(element => Math.pow(element, 2));
}
exports.getSquaredList = getSquaredList;
