/**
 * Given a string and a number, returns the string with only the specified number of characters
 */

export function cutText(text: string, length: number): string {
    return (typeof text === "string" && typeof length === "number") ? 
        text.substring(0, length) : 
        "Invalid Input data";
}