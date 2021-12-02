//1
let a = 0 || 'string'; //string
let b = 1 && 'string'; //string
let c = null || 25; //25
let d = null && 25; //null
let e = null || 0 || 35; //35
let f = null && 0 && 35; //null
//2
let value = 'xxx';
if (value === 'hidden') value = 'visible';
else value = 'hidden';
//3
let value = 3;
if (value === 0) value = 1;
else if (value < 0) value = 'less then zero';
else value *= 10;
//4
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
}
else car.needRepair = false;
//5
let item = { name: 'Intel core i7', price: '1000$', discount: '15%' };
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount);} 
else console.log(price);
//6
let product = {name: 'Яблоко', price: '15$'};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (parseFloat(product.price) >= min && parseFloat(product.price) <= max ) console.log(product.name);
else console.log('Товаров не найдено');