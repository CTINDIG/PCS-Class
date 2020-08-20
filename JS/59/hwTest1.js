// SL - nice
//Q1.
(function() {
    'use strict';
// SL - syntax
let arr = [2, 4, 6];

function map(arr, func) {


    const mapArr = [];
    for(let i = 0; i < arr.length; i++) {
        // SL - not a problem, but why 2 lines? why not just mapArr.push(func(arr[i]))
        const result = func(arr[i], arr);
        mapArr.push(result);
    }
    return mapArr;
}
const arr1 = map(arr, num => num * 2);

console.log(arr);
console.log(arr1);
}());