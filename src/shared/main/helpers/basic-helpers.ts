
export function normalizeText( text: string ) {
    return text.toLowerCase().replace(/[!.,]/g, '').trim();
}

export function printTextListResults( resultsList: string[] ): void {
    resultsList.map( result => console.log(result) );
}

export function getCharMap(text: string): {[key: string]: number} {
    let charMap: { [key: string]: number } = {};

    text.trim()
        .toLowerCase()
        .replace(/[\s.!?¿¡]/g, "")
        .split('')
        .forEach( char => {
        if(char in charMap) ++charMap[char];
        else charMap[char] = 1;
    });

    return charMap;
}

export function filterList(type: string, list: any[]) {
    return list.filter( element => typeof element === type)
}