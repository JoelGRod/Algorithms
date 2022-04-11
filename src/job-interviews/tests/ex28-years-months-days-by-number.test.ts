import { getYearsMonthsDays } from '../main/ex28-years-months-days-by-number';


describe("Exercise 28", () => {
    const days: number = 920;

    test("getYearsMonthsDays is defined", () => {
        expect(getYearsMonthsDays).toBeDefined();
    });
    test("getYearsMonthsDays returns text with years, months and days", () => {
        expect(getYearsMonthsDays(days)).toBe("920 days is equivalent to: 2 years, 6 months and 10 days");
    });
});