/**  
 * Ex 28: Given a number (days), return years, months and days passed.
 */

export function getYearsMonthsDays(days: number): string {

    const initialDays: number = days;

    let years = Math.floor(days / 365);
    
    days -= years * 365;
    
    let months = Math.floor(days / 30);
    
    days -= months * 30;

    return `${initialDays} days is equivalent to: ${years} years, ${months} months and ${days} days`;
}