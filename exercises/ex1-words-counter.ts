
const text_chain: string = "Hola, esto es un texto de prueba mediante el cual se " +
    "pretende contar cada una de las palabras que tiene y " +
    "mostrar este conteo por la consola... Espero que te diviertas!";

function normalize( word: string ) {
    return word.toLowerCase().replace(/[!.,]/g, '');
}

// O(n)
export function countWords( text: string = text_chain ) {

    let counterList: { [ key: string ]: number } = {};
    const wordsList = text.trim().split(' ');

    wordsList.map( word => {
        normalize(word) in counterList ? 
            ++counterList[normalize(word)] : 
            counterList[normalize(word)] = 1;
    } );

    return counterList;
}