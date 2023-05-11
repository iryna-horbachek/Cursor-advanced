export const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
}
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
}

//getMyTaxes.call(country, salary) -> number;
function getMyTaxes(currSalary) {
    const myTaxes = currSalary * this.tax;
    return myTaxes;
}
// console.log(getMyTaxes.call(ukraine, 15600))

//getMiddleTaxes.call(country) -> number;
function getMiddleTaxes() {
    const middleTaxes = this.middleSalary * this.tax;
    return middleTaxes;
}
// console.log(getMiddleTaxes.call(litva));

//getTotalTaxes.call(country) -> number;
function getTotalTaxes() {
    const totalTaxes = this.tax * this.middleSalary * this.vacancies;
    return totalTaxes;
}
// console.log(getTotalTaxes.call(ukraine));

//getMySalary(country)

function getMySalary() {
    const max = 2000, min = 1500;
    const salary = Math.floor(Math.random() * (max - min) + min);
    const taxes = salary * this.tax;
    const profit = salary - taxes;

    // console.log({ salary, taxes, profit })
}

getMySalary.call(latvia);
setInterval(() => getMySalary.call(latvia), 10000);