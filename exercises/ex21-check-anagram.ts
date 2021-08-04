
function convertTextToCharList(text: string): string[] {
    return text.toLowerCase().trim().split('').sort();
}

export function isAnagram(textOne: string, textTwo: string): boolean {
    
    const textOneList = convertTextToCharList(textOne);
    const textTwoList = convertTextToCharList(textTwo);
    
    return Array.isArray(textOneList) &&
           Array.isArray(textTwoList) &&
           textOneList.length === textTwoList.length &&
           textOneList.every( (char, index) => char === textTwoList[index]);

}