export function countWords(text: string): Map<string, number> {
    const words: Array<string> = text.trim().toLowerCase().split(' ');
    const dict: Map<string, number> = new Map<string, number>();

    words.map(word => {
        const fixedWord = word.replace(/[!.,]/g, '');
        const isInDict = dict.get(fixedWord);
        const counter = isInDict ? isInDict + 1 : 1;
        dict.set(fixedWord, counter);
    })

    return dict;
    // text.replace(/[!.,]/g, '').trim();
}

// countWords("Pablito clavo un clavito cuantos clavitos clavo pablito");