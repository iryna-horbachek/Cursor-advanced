"use strict";

require("core-js/modules/es.symbol.description.js");
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./index.js":
    /*!******************!*\
      !*** ./index.js ***!
      \******************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_HW_1_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/HW-1/script.js */ \"./src/HW-1/script.js\");\n/* harmony import */ var _src_HW_3_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/HW-3/script.js */ \"./src/HW-3/script.js\");\n/* harmony import */ var _src_HW_4_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/HW-4/script.js */ \"./src/HW-4/script.js\");\n/* harmony import */ var _src_HW_5_script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/HW-5/script.js */ \"./src/HW-5/script.js\");\n/* harmony import */ var _src_HW_6_script_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/HW-6/script.js */ \"./src/HW-6/script.js\");\n/* harmony import */ var _src_HW_7_script_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/HW-7/script.js */ \"./src/HW-7/script.js\");\n/* harmony import */ var _src_HW_8_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/HW-8/script.js */ \"./src/HW-8/script.js\");\n/* harmony import */ var _src_HW_9_script_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/HW-9/script.js */ \"./src/HW-9/script.js\");\n/* harmony import */ var _src_HW_9_script_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_HW_9_script_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n//1\nconsole.log(_src_HW_1_script_js__WEBPACK_IMPORTED_MODULE_0__.roundedToHundred);\nconsole.log(_src_HW_1_script_js__WEBPACK_IMPORTED_MODULE_0__.maxPrice);\nconsole.log(_src_HW_1_script_js__WEBPACK_IMPORTED_MODULE_0__.minPrice);\n\n//2\nconst newName = _src_HW_3_script_js__WEBPACK_IMPORTED_MODULE_1__.bigFirstLetter;\nconsole.log(newName('vLAdYslaV'));\n\n//3\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconsole.log((0,_src_HW_4_script_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(students));\n\n//4\nconsole.log((0,_src_HW_5_script_js__WEBPACK_IMPORTED_MODULE_3__.getAverage)(11, 78, 2, 55, 77));\nconsole.log((0,_src_HW_5_script_js__WEBPACK_IMPORTED_MODULE_3__.getDividedByFive)(64, 89, 55));\n\n//5\nconsole.log(_src_HW_6_script_js__WEBPACK_IMPORTED_MODULE_4__.students[0].name);\n\n//6\nconst keys = Object.entries(_src_HW_7_script_js__WEBPACK_IMPORTED_MODULE_5__.ukraine);\nconsole.log(keys);\n\n//7\nconst studentInfo = new _src_HW_8_script_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');\nconsole.log(studentInfo.getInfo());\n\n//8\n_src_HW_9_script_js__WEBPACK_IMPORTED_MODULE_7___default()();\n\n\n\n\n//# sourceURL=webpack://cursor-advanced/./index.js?");

      /***/
    },

    /***/"./src/HW-1/script.js":
    /*!****************************!*\
      !*** ./src/HW-1/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxPrice\": () => (/* binding */ maxPrice),\n/* harmony export */   \"minPrice\": () => (/* binding */ minPrice),\n/* harmony export */   \"roundedToHundred\": () => (/* binding */ roundedToHundred)\n/* harmony export */ });\n// //variables\nlet priceOfDress = 15.678;\nlet priceOfSkirt = 123.965;\nlet priceOfJacket = 90.2345;\n\n// //max and min values\nconst maxPrice = Math.max(priceOfDress, priceOfJacket, priceOfSkirt);\nconst minPrice = Math.min(priceOfDress, priceOfJacket, priceOfSkirt);\n// console.log(maxPrice);\n// console.log(minPrice);\n\n// //sum of prices\nconst sumOfProducts = priceOfDress + priceOfJacket + priceOfSkirt;\n// console.log(sumOfProducts);\n\n// //rounded to smaller side\n// const roundedPrices = (Math.ceil(sumOfProducts));\n\n// //rounded to hundred\nconst roundedToHundred = Math.round((Math.ceil(sumOfProducts))/100)*100;\n// console.log(roundedToHundred);\n\n//boolean value\n// let oddEvenNumber = oddOrEven(roundedPrices);\n// function oddOrEven(number) {\n//     if (number % 2 === 0) {\n//         return('true');\n//     } else {\n//         return('false');\n//     }\n// }\n// console.log(oddOrEven(roundedPrices));\n\n//sum of change\n// let clientCredit = 500;\n// const sumOfChange = clientCredit - sumOfProducts;\n// console.log(sumOfChange);\n\n// //avarage value\n// const arrayPrices = [priceOfDress, priceOfJacket, priceOfSkirt];\n// const avarageValue = parseFloat((sumOfProducts / arrayPrices.length).toFixed(2));\n// console.log(avarageValue);\n\n// //random discount\n// let number = Math.round(100);\n// let randomDiscount = Math.round((Math.random() * number)/10) * 5;\n// const sumWithDiscount = Number((sumOfProducts *  (100 - randomDiscount) / 100).toFixed(2));\n// console.log(sumWithDiscount);\n\n// //profit\n// const initialCost = sumOfProducts / 2;\n// const profit = Number((initialCost - randomDiscount).toFixed(2));\n// console.log(profit);\n\n// //template\n// console.log(`Максимальна ціна: ${maxPrice}. Мінімальна ціна: ${minPrice}. Загальна вартість товарів: ${sumOfProducts}. Округлена вартість всіх товарів до сотень: ${roundedToHundred}. Чи парне число суми всіх товарів? ${oddEvenNumber}. Сума решти: ${sumOfChange}. Cередня вартість товару: ${avarageValue}.`)\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-1/script.js?");

      /***/
    },

    /***/"./src/HW-3/script.js":
    /*!****************************!*\
      !*** ./src/HW-3/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bigFirstLetter\": () => (/* binding */ bigFirstLetter)\n/* harmony export */ });\n// 1. getMaxDigit(number)\nfunction getMaxDigit(number) {\n    let maxNumber = 0;\n    const eachDigit = number.toString().split(\"\");\n    for(let i = 0; i < eachDigit.length; i++) {\n        if(eachDigit[i] > maxNumber) {\n            maxNumber = eachDigit[i];\n            } \n        }\n        return +maxNumber;\n    }\n\n    // console.log(getMaxDigit(48179));\n\n// 2. get power of number\nconst getPowerNumber = function (base, power) {\n    let number = 1;\n    for(let i = 0; i < power; i++) {\n        number *= base;\n    }\n    return number;\n}\n\n// console.log(getPowerNumber(3, 3));\n\n// 3. name formatting\nconst bigFirstLetter = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();\n\n// console.log(bigFirstLetter('iRyNa'));\n\n// 4. net profit\nconst getNetProfit = (income, taxRate = 19.5) => income - (income / 100 * taxRate);\n\n// console.log(getNetProfit(2500, 18))\n\n// 5. getRandomNumber\nfunction getRandomNumber(min, max) {\n    const randomNumber = Math.round(Math.random() * (max - min) + min);\n    return randomNumber;\n}\n\n// console.log(getRandomNumber(10, 15));\n\n// 6. countLetter\nfunction countLetter(letter, word) {\n    let counter = 0;\n    for(let i = 0; i < word.length; i++) {\n        if(word[i] === letter) {\n            counter ++;\n        }\n    }\n    return counter;\n}\n\n// console.log(countLetter('e','overprotective'));\n\n// 7. getRandomPassword\nfunction getRandomPassword(length = 8) {\n    let password = '';\n    let possiblePassword = '123456789';\n    if (length > 0) {\n        for(let i = 1; i <= length; i++) {\n            password += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length)); \n        }\n    }\n    return +password;\n}\n\n// console.log((getRandomPassword()));\n\n// 8. deleteLetters\nfunction deleteLetters(letter, word) {\n    for(let i = 0; i <= word.length; i++) {\n        if(word.includes(letter)) {\n            return word.split(letter).join('');\n        }\n        else {\n            return 'There is no such letter'\n        }\n    }\n}\n\n// console.log(deleteLetters('b', 'blablabla'));\n\n// 9. isPalindrom\nconst isPalindrome = (word) => word === word.split('').reverse().join('');\n\n// console.log(isPalindrome('ara')); \n\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-3/script.js?");

      /***/
    },

    /***/"./src/HW-4/script.js":
    /*!****************************!*\
      !*** ./src/HW-4/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pairsArray)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\n\n//Divide students to pairs\nfunction pairsArray (persons) {\n    const pairsGroup = [];\n    pairsGroup.push([persons[0], persons[3]], [persons[1], persons[2]], [persons[4], persons[5]]);\n    return pairsGroup;\n}\n\n// console.log(pairsArray(students));\n\n//Add theme to pairs\nfunction studentsTheme(persons, subjects) {\n    const studentsGroup = [];\n        studentsGroup.push([persons[0] + ` i ` + persons[3], subjects[0]]);\n        studentsGroup.push([persons[1] + ` i ` + persons[2], subjects[1]]);\n        studentsGroup.push([persons[4] + ` i ` + persons[5], subjects[2]]);\n    return studentsGroup;\n}\n\n// console.log(studentsTheme(students, themes))\n\n//Match marks with students\nfunction matchMarks (persons, points ) {\n    const pointsOfStudents = [];\n    for (let i = 0; i < persons.length; i++) {\n        const eachPoints = [persons[i]].concat([points[i]]);\n        pointsOfStudents.push(eachPoints);\n        }\n    return pointsOfStudents;\n    }\n\n// console.log(matchMarks(students, marks));\n\n//Random mark for pairs\nfunction randomMark(markForEachGroup) {\n    const markOfGroup = markForEachGroup;\n    for(let i = 0; i < markOfGroup.length; i++) {\n            let random = Math.floor(Math.random() * 5) + 1;\n            markOfGroup[i].push(random);       \n        }\n    return markOfGroup;\n}\n\n// console.log(randomMark(studentsTheme(students, themes)));\n\n\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-4/script.js?");

      /***/
    },

    /***/"./src/HW-5/script.js":
    /*!****************************!*\
      !*** ./src/HW-5/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAverage\": () => (/* binding */ getAverage),\n/* harmony export */   \"getDividedByFive\": () => (/* binding */ getDividedByFive)\n/* harmony export */ });\n//getRandomArray\n\nconst getRandomArray = (length, min, max) => {\n    const randomArray = [];\n    for(let i = 0; i < length; i++) {\n        const random = Math.floor(Math.random() * max - min) + min;\n        randomArray.push(random);\n    }\n    return randomArray;\n}\n\n// console.log(getRandomArray(6, 5, 50));\n\n//getAverage\n\nfunction getAverage(...numbers) {\n    const integerArray = numbers.filter((number) => Number.isInteger(number));\n    const avarageAmount = integerArray.reduce((prev, curr) => prev + curr) / integerArray.length;\n    return avarageAmount;\n}\n\n// console.log(getAverage(3.6, 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.4));\n\n//filterEvenNumbers\n\nfunction filterEvenNumbers(...numbers) {\n    let oddNumbers = [];\n    oddNumbers = numbers.filter((number) => {\n        if(number % 2 !== 0) {\n           return number;\n        }\n    })\n    return oddNumbers;\n}\n\n// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8));\n\n//countPositiveNumbers\n\nconst countPositiveNumbers = (...numbers) => {\n    let positiveNumbers = [];\n    positiveNumbers = numbers.filter((number) => {\n        return number > 0;\n    })\n    return positiveNumbers\n}\n\n// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))\n\n//getDividedByFive\n\nfunction getDividedByFive(...numbers) {\n        let result = [];\n        result = numbers.filter((number) => number % 5 === 0);\n        return result;\n}\n\n// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n\n//replaceBadWords\n\nconst badWords = ['shit', 'fuck'];\n\nfunction replaceBadWords(string, word) {\n    let newString = string.split(' ').join(' ');\n    for (i = 0; i < word.length; i++) {\n        if(newString.includes(word[i])) {\n                changeWord = newString.replace(word[i], '****').split(' ');\n                newString = changeWord.join(' ');\n            }\n    }\n    return newString\n};\n        \n// console.log(replaceBadWords(\"Are you fucking kidding shit?\", badWords))\n\n//divideByThree\n\nconst divideByThree = (word) => {\n    const newArray = [];\n    for(let i = 0; i < word.length; i+=3) {\n        newArray.push(word.substring(i, i + 3))\n    }\n    return newArray;\n}\n\n// console.log(divideByThree('Commander'));\n// console.log(divideByThree('love'));\n\n\n        \n\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-5/script.js?");

      /***/
    },

    /***/"./src/HW-6/script.js":
    /*!****************************!*\
      !*** ./src/HW-6/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"students\": () => (/* binding */ students)\n/* harmony export */ });\nconst students = [{\n\n    name: \"Tanya\",\n    course: 3,\n    subjects: {\n        math: [4, 4, 3, 4],\n        algorithms: [3, 3, 3, 4, 4, 4],\n        data_science: [5, 5, 3, 4]\n    }\n    }, \n    {\n    name: \"Victor\",\n    course: 4,\n    subjects: {\n        physics: [5, 5, 5, 3],\n        economics: [2, 3, 3, 3, 3, 5],\n        geometry: [5, 5, 2, 3, 5]\n    }\n    }, \n    {\n    name: \"Anton\",\n    course: 2,\n    subjects: {\n        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n        english: [5, 3],\n        cosmology: [5, 5, 5, 5]\n    }\n}];\n//getSubjects(students[0] --> [\"Math\", \"Algorithms\", \"Data science\"]\n\nconst getSubjects = function(students) {\n    const formatedThemes = [];\n    const themes = Object.keys(students.subjects);\n        themes.forEach(theme => {\n            formatedThemes.push(theme[0].toUpperCase() + theme.slice(1).replaceAll('_',' '));\n        });\n        return formatedThemes;\n}\n// console.log(getSubjects(students[0]))\n\n//getAverageMark(students[0]) --> 3.79\n\nfunction getAverageMark(students) {\n    const studentMarks = Object.values(students.subjects);\n    const allMarks = [];\n    for(let i = 0; i < studentMarks.length; i++) {\n        for(let j = 0; j < studentMarks[i].length; j++) {\n            allMarks.push(studentMarks[i][j]);   \n        }\n    }\n    const avarageMark = allMarks.reduce((prev, curr) => ((prev + curr)));\n    const avarage = Number((avarageMark / allMarks.length).toFixed(2));\n    return avarage;\n}\n// console.log(getAverageMark(students[0]));\n\n//getStudentInfo(students[0]) --> { \"course\": 3, \"name\": \"Tanya\", \"averageMark\": 3.79}\n\nfunction getStudentInfo (students) {\n    const mark = getAverageMark(students);\n    const { name, course } = students;\n    return {\n            name,\n            course,\n            mark\n    }\n}\n\n// console.log(getStudentInfo(students[1]));\n\n//getStudentsNames(students) --> [\"Anton\", \"Tanya, \"Victor\"]\n\nconst getStudentsNames = (students) => {\n    const studentNames = [];\n    for(let student of students) {\n        studentNames.push(student.name)\n    }\n    return studentNames.sort();\n}\n\n// console.log(getStudentsNames(students));\n\n//getBestStudent(students) --> \"Anton\"\nconst getBestStudent = (students) => {\n    let name;\n    for (i = 0; i < students.length; i++) {\n        const mark = 0;\n        if (mark < getAverageMark(students[i])) {\n            name = students[i].name\n        }\n    }\n    return name;\n};\n\n// console.log(getBestStudent(students));\n \n//calculateWordLetters(\"тест\") --> { \"т\": 2, \"е\": 1, \"с\": 1 }\nfunction calculateWordLetters(word) {\n    const allLetters = {};\n        for(let i = 0; i < word.length; i++) {\n            const letter = word[i];\n            if(!allLetters[letter]) {\n                allLetters[letter] = 1;\n            } else {\n                allLetters[letter]++;\n            }\n        }\n        return allLetters;\n}\n\n// console.log(calculateWordLetters('abababgalamaga'))\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-6/script.js?");

      /***/
    },

    /***/"./src/HW-7/script.js":
    /*!****************************!*\
      !*** ./src/HW-7/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ukraine\": () => (/* binding */ ukraine)\n/* harmony export */ });\nconst ukraine = { \n    tax: 0.195, \n    middleSalary: 1789, \n    vacancies: 11476 \n};\nconst latvia = {\n    tax: 0.25,\n    middleSalary: 1586,\n    vacancies: 3921\n}\nconst litva = {\n    tax: 0.15,\n    middleSalary: 1509,\n    vacancies: 1114\n}\n\n//getMyTaxes.call(country, salary) -> number;\nfunction getMyTaxes(currSalary) {\n    const myTaxes = currSalary * this.tax;\n    return myTaxes;\n}\n// console.log(getMyTaxes.call(ukraine, 15600))\n\n//getMiddleTaxes.call(country) -> number;\nfunction getMiddleTaxes() {\n    const middleTaxes = this.middleSalary * this.tax;\n    return middleTaxes;\n}\n// console.log(getMiddleTaxes.call(litva));\n\n//getTotalTaxes.call(country) -> number;\nfunction getTotalTaxes() {\n    const totalTaxes = this.tax * this.middleSalary * this.vacancies;\n    return totalTaxes;\n}\n// console.log(getTotalTaxes.call(ukraine));\n\n//getMySalary(country)\n\nfunction getMySalary() {\n    const max = 2000, min = 1500;\n    const salary = Math.floor(Math.random() * (max - min) + min);\n    const taxes = salary * this.tax;\n    const profit = salary - taxes;\n\n    // console.log({ salary, taxes, profit })\n}\n\ngetMySalary.call(latvia);\nsetInterval(() => getMySalary.call(latvia), 10000);\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-7/script.js?");

      /***/
    },

    /***/"./src/HW-8/script.js":
    /*!****************************!*\
      !*** ./src/HW-8/script.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Student)\n/* harmony export */ });\nclass Student {\n    constructor(course, university, fullName) {\n        this.university = university;\n        this.course = course;\n        this.fullName = fullName;\n        this.marks = [5, 4, 4, 5];\n        // this.marks = [1, 1, 1, 1];\n        this.dismiss = false;\n    }\n    \n    getInfo() {\n        if(!this.dismiss) {\n            return `Студент ${this.course} ${this.university} м.Одеса, ${this.fullName}`;\n        } else {\n            return 'Цей студент виключений';\n        }\n    }\n\n    getAverageMark() {\n        if(!this.dismiss) {\n            const avarageMark = this.marks.reduce((prev, curr) => ((prev + curr))) / this.marks.length;\n            return avarageMark;\n        } else {\n            return null;\n        }\n    }\n\n    dismissStudent() {\n        this.dismiss = true;\n        return 'Цей студент виключений'\n    }\n\n    recoverStudent() {\n        this.dismiss = false;\n        return 'Цього студента поновлено';\n    }\n\n    get studentMarks() {\n        if(!this.dismiss) {\n            return this.marks;\n        } else {\n            return null;\n    }\n}\n\n    set studentMarks(mark) {\n        if(!this.dismiss) {\n            const newMark = this.marks.concat(mark);\n            return this.marks = newMark;\n        } else {\n            return 'Цей студент виключений'\n        }\n    }\n}\n\nconst studentInfo = new Student('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');\n// console.log(studentInfo.getInfo());\n\n//геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]\n//сеттер оцінок \n// console.log(studentInfo.studentMarks);\nstudentInfo.studentMarks = 5;\n// console.log(studentInfo.studentMarks);\n\n//avarageMark\n// console.log(studentInfo.getAverageMark());\n\n//dismissStudent\nstudentInfo.dismissStudent();\n// console.log(studentInfo.getInfo());\n// console.log(studentInfo.getAverageMark());\n// console.log(studentInfo.studentMarks);\nstudentInfo.studentMarks = 5;\n// console.log(studentInfo.studentMarks);\n\n//recoverStudent\n// console.log(studentInfo.recoverStudent());\n// console.log(studentInfo.getInfo());\n// console.log(studentInfo.getAverageMark());\n// console.log(studentInfo.studentMarks);\n\n\nclass BudgetStudent extends Student {\n    constructor(course, university, fullName) {\n        super(course, university, fullName);\n        setInterval(() => {\n            this.getScholarship()\n        }, 30000);\n    }\n\n    getScholarship() {    \n        if(this.getAverageMark() >= 4) {\n            console.log(`Ви отримали 1400 грн стипендії`);\n        } else if (this.dismiss === true) {\n            console.log(`Вас виключено з курсу`);\n        }\n         else {\n            console.log('Ви не можете отримувати стипендію')\n        }\n    }\n}\n\nconst otherStudent = new BudgetStudent('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');\n// otherStudent.dismissStudent();\n// console.log(otherStudent.getAverageMark());\notherStudent.getScholarship();\n\n\n\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-8/script.js?");

      /***/
    },

    /***/"./src/HW-9/script.js":
    /*!****************************!*\
      !*** ./src/HW-9/script.js ***!
      \****************************/
    /***/
    () => {
      eval("function generateBlocks() {\n    const container = document.querySelector('.div');\n    const length = 25;\n    container.innerHTML = '';\n        for (let i = 0; i < length; i++) {\n            const square = document.createElement('square');\n            square.style.background = getRandomColor();\n            container.append(square);\n        }       \n    return container;       \n}\n\nfunction getRandomColor() {\n    const firstColor = Math.floor(Math. random() * 256);\n    const secondColor = Math.floor(Math. random() * 256);\n    const thirdColor = Math.floor(Math. random() * 256);\n    const randomColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;\n    return randomColor;\n}\n\nfunction generateBlocksInterval() {\n    const interval = setInterval(generateBlocks, 1000);\n    return interval;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://cursor-advanced/./src/HW-9/script.js?");

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = module => {
      /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = __webpack_require__("./index.js");
  /******/
  /******/
})();