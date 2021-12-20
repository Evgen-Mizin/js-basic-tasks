//1
function getArray(num) {
    let arr = [];
    for (let i = 1; i <= num; i++)
    {
       let x = arr.push(i);
    }
    return arr;
}
getArray(13);
//2
function doubleArray(arr) {
    value = arr.concat(arr);
    return value;
}
doubleArray([1,2,3]);
3
function changeCollection() {
    console.log(arguments);
    const res = [];
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].shift();
        res.push(arguments[i])
      }
    }
    return res;
  }
console.log(changeCollection([1,2,3],[3,5,7]));
//4
const users = [
    {
      "_id": "5e36b779dc76fe3db02adc32",
      "balance": "$1,955.65",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Berg Zimmerman",
      "gender": "male"
    },
    {
      "_id": "5e36b779d117774176f90e0b",
      "balance": "$3,776.14",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Deann Winters",
      "gender": "female"
    },
    {
      "_id": "5e36b779daf6e455ec54cf45",
      "balance": "$3,424.84",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Kari Waters",
      "gender": "female"
    }
  ]
  
  
function filterUsers(arr, key, value) {
    if (!Array.isArray(arr)) return new Error('The first argument should be an array');
    if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
    if (value === undefined || value === null) return new Error('The value should be a valid value.');
    const res = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
        res.push(arr[i])
        }
    }
      
    return res;
}
console.log(filterUsers(users, "age", 37))