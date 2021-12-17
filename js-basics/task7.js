//1 
function multiply(x) {
    res = 1;
    if (x) {
    for (let i = 0; i< arguments.length; i++) {
        res *= arguments[i];}
    return res;}
    else return 0;
}
multiply(3,5,7);
//2
function reverseString(str) {
    res = '';
    str = String(str);
    for (let i = str.length; i--;) {
        res += str[i];
    }
        return res;
}
res1= reverseString('test');
console.log(res1);
res2=reverseString(undefined);
console.log(res2);
//3
function getCodeStringFromText(str) {
    str = String(str);
    res = '';
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) + ' ';
    }
    res = res.trim();
    return res;
}
res1 = getCodeStringFromText('abcd efgh');
console.log(res1);
//4
function guessTheNumber(num) {
    num = Number(num);
    if (isNaN(num)) return console.error('Please provide a valid number')
    else if (num < 0 || num > 10) return console.error('Please provide number in range 0-10')
    else {
        randomValue = Math.floor(Math.random() * 10 + 1);
        if (randomValue === num) return console.log('You win!')
        else console.log('You are lose, your number is ',num,' the random number is ',randomValue)
    }
}
guessTheNumber(4);