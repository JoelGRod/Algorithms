/**
 * Given a string returns it converted to titlecase string.
 */


export function toTitleCaseRegExp(text: string): string {
    return text.toLowerCase().replace(/\b\w/gi, (char) => char.toUpperCase());
}

export function toTitleCase(text: string): string {

    let charList = text.split('');

    let lastChar: string = "";

    for (let i = 0; i < charList.length; i++) {
        if (i === 0 || lastChar === " ") charList[i] = charList[i].toUpperCase();
        lastChar = charList[i];
    }

    return charList.join('');
}
