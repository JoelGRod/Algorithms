
export function normalizeText( text: string ) {
    return text.toLowerCase().replace(/[!.,]/g, '').trim();
}

export function printTextListResults( resultsList: string[] ): void {
    resultsList.map( result => console.log(result) );
}