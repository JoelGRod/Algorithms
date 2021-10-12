"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostCommonHobbies = (users) => {
    const comonHobbies = {};
    users.map(({ hobbies }) => {
        hobbies.map(hobby => {
            if (hobby in comonHobbies)
                comonHobbies[hobby]++;
            else
                comonHobbies[hobby] = 1;
        });
    });
    return comonHobbies;
};
exports.default = mostCommonHobbies;
