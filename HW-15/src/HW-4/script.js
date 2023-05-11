const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//Divide students to pairs
export default function pairsArray (persons) {
    const pairsGroup = [];
    pairsGroup.push([persons[0], persons[3]], [persons[1], persons[2]], [persons[4], persons[5]]);
    return pairsGroup;
}

// console.log(pairsArray(students));

//Add theme to pairs
function studentsTheme(persons, subjects) {
    const studentsGroup = [];
        studentsGroup.push([persons[0] + ` i ` + persons[3], subjects[0]]);
        studentsGroup.push([persons[1] + ` i ` + persons[2], subjects[1]]);
        studentsGroup.push([persons[4] + ` i ` + persons[5], subjects[2]]);
    return studentsGroup;
}

// console.log(studentsTheme(students, themes))

//Match marks with students
function matchMarks (persons, points ) {
    const pointsOfStudents = [];
    for (let i = 0; i < persons.length; i++) {
        const eachPoints = [persons[i]].concat([points[i]]);
        pointsOfStudents.push(eachPoints);
        }
    return pointsOfStudents;
    }

// console.log(matchMarks(students, marks));

//Random mark for pairs
function randomMark(markForEachGroup) {
    const markOfGroup = markForEachGroup;
    for(let i = 0; i < markOfGroup.length; i++) {
            let random = Math.floor(Math.random() * 5) + 1;
            markOfGroup[i].push(random);       
        }
    return markOfGroup;
}

// console.log(randomMark(studentsTheme(students, themes)));


