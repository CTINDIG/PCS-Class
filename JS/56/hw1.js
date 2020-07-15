//Q1.
const d = (function () {
    'use strict';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        getDayName : function (index) {
            return daysOfWeek[index - 1];
        },
        getDayNumber : function (name) {
            return daysOfWeek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());

console.log(d.getDayName(2));
console.log(d.getDayNumber('monday'));



//Q2.
const ab = (function () {
    'use strict';

let rate;
let year;

        return {
        setRate : function (num) {
          rate = num;
        },
        setYears : function (yearNum) {
          year = yearNum;
        },
         calculateInterest : function (principle) {
             return principle * rate * year;

            },
        };
    }());

    ab.setYears(4);
    ab.setRate(0.1);
    console.log(ab.calculateInterest(100));
