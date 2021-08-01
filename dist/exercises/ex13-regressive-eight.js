"use strict";
/**
 * Regressive counting by 8.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.regressiveEight = void 0;
function regressiveEight(digit) {
    let regressiveList = [
        `--- From ${digit} to 0 ---`,
    ];
    while (digit > 0) {
        regressiveList.push(`- nº${digit}`);
        digit -= 8;
    }
    regressiveList.push('- nº0', '--- End ---');
    return regressiveList;
}
exports.regressiveEight = regressiveEight;
