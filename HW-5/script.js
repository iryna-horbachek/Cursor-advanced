//getRandomArray

const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for(let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * max - min) + min;
        randomArray.push(random);
    }
    return randomArray;
}

console.log(getRandomArray(6, 5, 50));

//getAverage

function getAverage(...numbers) {
    const integerArray = numbers.filter((number) => Number.isInteger(number));
    const avarageAmount = integerArray.reduce((prev, curr) => prev + curr) / integerArray.length;
    return avarageAmount;
}

console.log(getAverage(3.6, 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.4));

//filterEvenNumbers

function filterEvenNumbers(...numbers) {
    let oddNumbers = [];
    oddNumbers = numbers.filter((number) => {
        if(number % 2 !== 0) {
           return number;
        }
    })
    return oddNumbers;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8));

//countPositiveNumbers

const countPositiveNumbers = (...numbers) => {
    let positiveNumbers = [];
    positiveNumbers = numbers.filter((number) => {
        return number > 0;
    })
    return positiveNumbers
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

//getDividedByFive

function getDividedByFive(...numbers) {
        let result = [];
        result = numbers.filter((number) => number % 5 === 0);
        return result;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//replaceBadWords

const badWords = ['shit', 'fuck'];

function replaceBadWords(string, word) {
    let newString = string.split(' ').join(' ');
    for (i = 0; i < word.length; i++) {
        if(newString.includes(word[i])) {
                changeWord = newString.replace(word[i], '****').split(' ');
                newString = changeWord.join(' ');
            }
    }
    return newString
};
        
console.log(replaceBadWords("Are you fucking kidding shit?", badWords))

//divideByThree

const divideByThree = (word) => {
    const newArray = [];
    for(let i = 0; i < word.length; i+=3) {
        newArray.push(word.substring(i, i + 3))
    }
    return newArray;
}

console.log(divideByThree('Commander'));
console.log(divideByThree('love'));
        

