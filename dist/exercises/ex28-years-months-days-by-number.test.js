"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex28_years_months_days_by_number_1 = require("./ex28-years-months-days-by-number");
describe("Exercise 28", () => {
    const days = 920;
    test("getYearsMonthsDays is defined", () => {
        expect(ex28_years_months_days_by_number_1.getYearsMonthsDays).toBeDefined();
    });
    test("getYearsMonthsDays returns text with years, months and days", () => {
        expect(ex28_years_months_days_by_number_1.getYearsMonthsDays(days)).toBe("920 days is equivalent to: 2 years, 6 months and 10 days");
    });
});
