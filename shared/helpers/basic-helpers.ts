
export function normalizeText( text: string ) {
    return text.toLowerCase().replace(/[!.,]/g, '');
}

export function printTextListResults( resultsList: string[] ): void {
    resultsList.map( result => console.log(result) );
}