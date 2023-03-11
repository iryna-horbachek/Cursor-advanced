let numberOne;
let numberTwo;
let addEvenNumber;
let result = 0;

do {
    numberOne = +prompt('Введіть ціле число більше 0');
} while (numberOne <= 0 || isNaN(numberOne) || !Number.isInteger(numberOne));

console.log(numberOne);

do {
    numberTwo = +prompt('Введіть друге ціле число більше ніж перше');
} while (numberTwo <= 0 || isNaN(numberTwo) || !Number.isInteger(numberTwo) || numberTwo <= numberOne);

console.log(numberTwo);

addEvenNumber = confirm('Бажаєте пропускати парні числа?');

for(let i = numberOne; i <= numberTwo; i++) {
    if (!addEvenNumber) {
        if (i % 2 === 0) {
            continue;
            }
        }    
    result += i; 
}
console.log(result);
   



   
