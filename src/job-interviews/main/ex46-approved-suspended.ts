interface Student {
    name: string;
    grade: number;
}

const getApprovedAndFailed = (students: Student[]): string => {
    const grades = {
        approved: 0,
        suspended: 0,
    };

    students.map( student => {
        if( student.grade >= 5 ) grades.approved++;
        else grades.suspended++;
    });

    return `
    Students Approved: ${ grades.approved }
    Students Suspended: ${ grades.suspended }
    `;
}

export default getApprovedAndFailed;