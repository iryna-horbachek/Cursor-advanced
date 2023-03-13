// 1. getMaxDigit(number)
function getMaxDigit(number) {
    let maxNumber = 0;
    const eachDigit = number.toString().split("");
    for(let i = 0; i < eachDigit.length; i++) {
        if(eachDigit[i] > maxNumber) {
            maxNumber = eachDigit[i];
            } 
        }
        return +maxNumber;
    }

    console.log(getMaxDigit(48179));

// 2. get power of number
const getPowerNumber = function (base, power) {
    let number = 1;
    for(let i = 0; i < power; i++) {
        number *= base;
    }
    return number;
}

console.log(getPowerNumber(3, 3));

// 3. name formatting
const bigFirstLetter = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();

console.log(bigFirstLetter('iRyNa'));

// 4. net profit
const getNetProfit = (income, taxRate = 19.5) => income - (income / 100 * taxRate);

console.log(getNetProfit(2500, 18))

// 5. getRandomNumber
function getRandomNumber(min, max) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    return randomNumber;
}

console.log(getRandomNumber(10, 15));

// 6. countLetter
function countLetter(letter, word) {
    let counter = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            counter ++;
        }
    }
    return counter;
}

console.log(countLetter('e','overprotective'));

// 7. getRandomPassword
function getRandomPassword(length = 8) {
    let password = '';
    let possiblePassword = '123456789';
    if (length > 0) {
        for(let i = 1; i <= length; i++) {
            password += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length)); 
        }
    }
    return +password;
}

console.log((getRandomPassword()));

// 8. deleteLetters
function deleteLetters(letter, word) {
    for(let i = 0; i <= word.length; i++) {
        if(word.includes(letter)) {
            return word.split(letter).join('');
        }
        else {
            return 'There is no such letter'
        }
    }
}

console.log(deleteLetters('b', 'blablabla'));

// 9. isPalindrom
const isPalindrome = (word) => word === word.split('').reverse().join('');

console.log(isPalindrome('ara')); 

