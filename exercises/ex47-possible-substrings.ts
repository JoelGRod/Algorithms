
const getAllSubstrings = (text: string): string[] => {

    let substrings: string[] = [];

    // for( let i = 0; i < text.length; i++ ) {
    //     for( let j = 1; j <= text.length; j++ ) {
    //         if(i >= j) continue;
    //         substrings.push(text.substring(i, j));
    //     }
    // }

    for( let index in text.split('') ) {
        let init = parseInt(index);
        for( let end = 1; end <= text.length; end++ ) {
            if(init >= end) continue;
            substrings.push(text.substring(init, end));
        }
    }
    

    return substrings;
}

export default getAllSubstrings;