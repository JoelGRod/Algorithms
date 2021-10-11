"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkEmail = (email) => {
    const rexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    return rexp.test(email);
};
exports.default = checkEmail;
