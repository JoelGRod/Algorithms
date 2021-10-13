
const isPropertyInObject = (anObject: any, property: string): boolean => {

    // return Object.keys(anObject).includes(property);
    return anObject.hasOwnProperty(property);

}

export default isPropertyInObject;