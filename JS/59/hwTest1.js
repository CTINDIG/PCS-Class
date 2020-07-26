//Q1. 
(function() {
    'use strict';
let arr = [2, 4, 6];

function map(arr, func) {


    const mapArr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = func(arr[i], arr);
        mapArr.push(result);
    }
    return mapArr;
}
const arr1 = map(arr, num => num * 2);

console.log(arr);
console.log(arr1); 
}());