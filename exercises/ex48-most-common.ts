
interface User {
    name: string;
    hobbies: string[];
}

const mostCommonHobbies = (users: User[]): { [id: string]: number } => {

    const comonHobbies: { [id: string]: number } = {};

    users.map( ( { hobbies } ) => {
        hobbies.map( hobby => {
            if(hobby in comonHobbies) comonHobbies[hobby]++;
            else comonHobbies[hobby] = 1;
        } )
    });

    return comonHobbies;
}

export default mostCommonHobbies;