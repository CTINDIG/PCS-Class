  'use strict';

//Q1. 
function ourEvery(theArray, callback){

    for (let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
           return false;
    }
}
return true;
}

const upperCase = ['A', 'B', 'C'];
const mixedCase = ['d', 'E', 'f'];
const lowerCase = ['g', 'h', 'i'];
 
function isUpperCase(letter) {
    return letter === letter.toUpperCase();
}

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

console.log('Our every', ourEvery(upperCase, isUpperCase));   console.log('Built in Our every', upperCase.every(isUpperCase));

console.log('Our every2', ourEvery(mixedCase, isUpperCase));  console.log('Built in Our every2', mixedCase.every(isUpperCase));

console.log('Our every3', ourEvery(lowerCase, isUpperCase));  console.log('Built inOur every3', lowerCase.every(isUpperCase));


console.log('Our every', ourEvery(upperCase, isLowerCase));   console.log('Built in Our every', upperCase.every(isLowerCase));

console.log('Our every2', ourEvery(mixedCase, isLowerCase));  console.log('Built in Our every2', mixedCase.every(isLowerCase));

console.log('Our every3', ourEvery(lowerCase, isLowerCase));  console.log('Built in Our every3', lowerCase.every(isLowerCase));

//Q2.
function ourSome(theArray, callback){

    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
           return true;
    }
}
return false;
}

console.log('Our some', ourSome(upperCase, isUpperCase));   console.log('Built in Our some', upperCase.some(isUpperCase));     

console.log('Our some1', ourSome(mixedCase, isUpperCase));  console.log('Built in Our some1', mixedCase.some(isUpperCase));

console.log('Our some2', ourSome(lowerCase, isUpperCase));  console.log('Built in Our some2', lowerCase.some(isUpperCase));
 

console.log('Our some', ourSome(upperCase, isLowerCase));   console.log('Built in Our some', upperCase.some(isLowerCase));

console.log('Our some1', ourSome(mixedCase, isLowerCase));  console.log('Built in Our some1', mixedCase.some(isLowerCase));

console.log('Our some2', ourSome(lowerCase, isLowerCase));  console.log('Built in Our some2', lowerCase.some(isLowerCase));

//Q3. 
function onlyIf(theArray, test, action) {
 for (let i = 0; i < theArray.length; i++) {
     if (test(theArray[i])) {
         action(theArray[i]);
        }
    }
}
onlyIf(upperCase, isUpperCase, console.log);

onlyIf(mixedCase, isUpperCase, console.log);

onlyIf(lowerCase, isUpperCase, console.log);

//Q4. 
function action() {
    console.log('PPeeeeerrrriiiimmm!!');
}
onlyIf(upperCase, isUpperCase, action);

const result = upperCase.filter(isUpperCase);
result.forEach(element => {
    action();
});





