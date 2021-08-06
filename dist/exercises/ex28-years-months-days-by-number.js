"use strict";
/**
 * Ex 28: Given a number (days), return years, months and days passed.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearsMonthsDays = void 0;
function getYearsMonthsDays(days) {
    const initialDays = days;
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 30);
    days -= months * 30;
    return `${initialDays} days is equivalent to: ${years} years, ${months} months and ${days} days`;
}
exports.getYearsMonthsDays = getYearsMonthsDays;
