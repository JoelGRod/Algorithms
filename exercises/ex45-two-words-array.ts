
const getTwoWordsValues = ( words: string[] ): string[] => {

    return words.filter( ( word ) => word.includes(" ") );

}

export default getTwoWordsValues;