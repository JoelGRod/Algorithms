
const checkEmail = ( email: string ): boolean => {
    const rexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    return rexp.test(email);
}

export default checkEmail;