const students = [{

    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, 
    {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, 
    {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
//getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]

const getSubjects = function(students) {
    const formatedThemes = [];
    const themes = Object.keys(students.subjects);
        themes.forEach(theme => {
            formatedThemes.push(theme[0].toUpperCase() + theme.slice(1).replaceAll('_',' '));
        });
        return formatedThemes;
}
console.log(getSubjects(students[0]))

//getAverageMark(students[0]) --> 3.79

function getAverageMark(students) {
    const studentMarks = Object.values(students.subjects);
    const allMarks = [];
    for(let i = 0; i < studentMarks.length; i++) {
        for(let j = 0; j < studentMarks[i].length; j++) {
            allMarks.push(studentMarks[i][j]);   
        }
    }
    const avarageMark = allMarks.reduce((prev, curr) => ((prev + curr)));
    const avarage = Number((avarageMark / allMarks.length).toFixed(2));
    return avarage;
}
console.log(getAverageMark(students[0]));

//getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}

function getStudentInfo (students) {
    const mark = getAverageMark(students);
    const { name, course } = students;
    return {
            name,
            course,
            mark
    }
}

console.log(getStudentInfo(students[1]));

//getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]

const getStudentsNames = (students) => {
    const studentNames = [];
    for(let student of students) {
        studentNames.push(student.name)
    }
    return studentNames.sort();
}

console.log(getStudentsNames(students));

//getBestStudent(students) --> "Anton"
const getBestStudent = (students) => {
    let name;
    for (i = 0; i < students.length; i++) {
        const mark = 0;
        if (mark < getAverageMark(students[i])) {
            name = students[i].name
        }
    }
    return name;
};

console.log(getBestStudent(students));
 
//calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }
function calculateWordLetters(word) {
    const allLetters = {};
        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            if(!allLetters[letter]) {
                allLetters[letter] = 1;
            } else {
                allLetters[letter]++;
            }
        }
        return allLetters;
}

console.log(calculateWordLetters('abababgalamaga'))
