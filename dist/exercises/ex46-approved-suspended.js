"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getApprovedAndFailed = (students) => {
    const grades = {
        approved: 0,
        suspended: 0,
    };
    students.map(student => {
        if (student.grade >= 5)
            grades.approved++;
        else
            grades.suspended++;
    });
    return `
    Students Approved: ${grades.approved}
    Students Suspended: ${grades.suspended}
    `;
};
exports.default = getApprovedAndFailed;
