'use strict';

//Q1.
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 10));
console.log(multiply(3, 22));
console.log(multiply(7, 7));

//Q2.
function  getMultiplier() {
    return function (a, b) {
        return (a * b);
    };
}

 const multiplier2 = getMultiplier();
 console.log(multiplier2(1, 6));
 console.log(multiplier2(16, 52));
 console.log(multiplier2(2, 50));

 //Q3.
 function  getMultiplier2(c) {
    return function (d) {
        return (c * d);
    };
}
const multiply1 = getMultiplier2(1);
console.log(multiply1(5));
const multiply2 = getMultiplier2(6);
console.log(multiply2(4));
const multiply3 = getMultiplier2(9);
console.log(multiply3(13));