//variables
let priceOfDress = 15.678;
let priceOfSkirt = 123.965;
let priceOfJacket = 90.2345;

//max and min values
const maxPrice = Math.max(priceOfDress, priceOfJacket, priceOfSkirt);
const minPrice = Math.min(priceOfDress, priceOfJacket, priceOfSkirt);
console.log(maxPrice);
console.log(minPrice);

//sum of prices
const sumOfProducts = priceOfDress + priceOfJacket + priceOfSkirt;
console.log(sumOfProducts);

//rounded to smaller side
const roundedPrices = (Math.ceil(sumOfProducts));

//rounded to hundred
const roundedToHundred = Math.round((Math.ceil(sumOfProducts))/100)*100;
console.log(roundedToHundred);

//boolean value
let oddEvenNumber = oddOrEven(roundedPrices);
function oddOrEven(number) {
    if (number % 2 === 0) {
        return('true');
    } else {
        return('false');
    }
}
console.log(oddOrEven(roundedPrices));

//sum of change
let clientCredit = 500;
const sumOfChange = clientCredit - sumOfProducts;
console.log(sumOfChange);

//avarage value
const arrayPrices = [priceOfDress, priceOfJacket, priceOfSkirt];
const avarageValue = parseFloat((sumOfProducts / arrayPrices.length).toFixed(2));
console.log(avarageValue);

//random discount
let number = Math.round(100);
let randomDiscount = Math.round((Math.random() * number)/10) * 5;
const sumWithDiscount = Number((sumOfProducts *  (100 - randomDiscount) / 100).toFixed(2));
console.log(sumWithDiscount);

//profit
const initialCost = sumOfProducts / 2;
const profit = Number((initialCost - randomDiscount).toFixed(2));
console.log(profit);

//template
console.log(`Максимальна ціна: ${maxPrice}. Мінімальна ціна: ${minPrice}. Загальна вартість товарів: ${sumOfProducts}. Округлена вартість всіх товарів до сотень: ${roundedToHundred}. Чи парне число суми всіх товарів? ${oddEvenNumber}. Сума решти: ${sumOfChange}. Cередня вартість товару: ${avarageValue}.`)
