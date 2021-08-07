

export function removeDuplicatesAndStrings(list: any[]) {

    list = list.filter( element => typeof element !== "string");

    return Array.from(new Set(list));
}