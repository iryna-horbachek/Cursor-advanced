const numberOne = +prompt('Введіть число');
const numberTwo = +prompt('Введіть друге число');
const addEvenNumber = confirm('Бажаєте пропускати парні числа?');
let result = 0;

if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert('Це не число');
}
else if (!Number.isInteger(numberOne)|| !Number.isInteger(numberTwo)) {
    alert('Введіть ціле число')
} 
else if (numberOne <= 0 || numberTwo <= 0) {
    alert('Ведіть число більше 0')
}
else if (numberTwo <= numberOne) {
    alert('Друге число має бути більшим ніж перше')
}
else {
   console.log(numberOne);
   console.log(numberTwo);
   for(let i = numberOne; i <= numberTwo; i++) {
    if (!addEvenNumber) {
        if (i % 2 === 0) {
            continue;
            }
        }    
            result += i; 
}
console.log(result);
   
}


   
