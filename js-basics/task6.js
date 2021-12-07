//1
let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}
//2
let str = 'tseb eht ma i';
let res = '';
for (let i = str.length; i--;) {
    res += str[i];
}
//3
let res = 1;
for (let i = 1; i <= 10; i++) {
  res *= i;
}
//4
let str = 'JavaScript is a pretty good language';
let res = '';
for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
        res += str[i].toUpperCase();
      } else if (str[i] === ' '){
        continue;
      }
        else res += str[i];
}
console.log(res)
//5
let a =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of a) {
    if (value % 2) console.log(value);
}
//6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
  }
for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
  } 
console.log(list);