

export function removeDuplicatesAndStrings(list: any[]) {

    list = list.filter( element => typeof element === "number");

    return Array.from(new Set(list));
}