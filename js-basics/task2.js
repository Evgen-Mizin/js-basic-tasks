//1
let value1 = string[0];
let value2 = string[string.length - 1];
//2
let value1 = string[0].toUpperCase();
let value2 = string[string.length - 1].toUpperCase();
//3
let value = string.indexOf('string');
//4
let value1 = string.indexOf(' ');
let value2 = string.indexOf(' ', firstSpace + 1);
//5
let value = string.substr(5, 4);
//6
let value = string.slice(5, 10);
//7
let value = string.slice(0, -6);
//8
let a = 20, b = 16;
let value = String(a) + String(b);