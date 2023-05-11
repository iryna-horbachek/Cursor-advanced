import { roundedToHundred, maxPrice, minPrice } from '/src/HW-1/script.js';
import { bigFirstLetter as name } from './src/HW-3/script.js';
import m from './src/HW-4/script.js';
import { getAverage, getDividedByFive } from './src/HW-5/script.js';
import { students as persons } from './src/HW-6/script.js';
import { ukraine } from './src/HW-7/script.js';
import Student from './src/HW-8/script.js';
import getRandomChinese from './src/HW-11/script.js';
import { createIdGenerator } from './src/HW-13/script.js';
import './style.css';


//1
console.log(roundedToHundred);
console.log(maxPrice);
console.log(minPrice);

//2
const newName = name;
console.log(newName('vLAdYslaV'));

//3
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
console.log(m(students));

//4
console.log(getAverage(11, 78, 2, 55, 77));
console.log(getDividedByFive(64, 89, 55));

//5
console.log(persons[0].name);

//6
const keys = Object.entries(ukraine);
console.log(keys);

//7
const studentInfo = new Student('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');
console.log(studentInfo.getInfo());

//8
getRandomChinese(4).then((resp => console.log(resp)));

//9
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


