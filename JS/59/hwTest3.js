// SL - nice
//Q3.
 window.app = window.app || {};
 window.app.CreateCounters = (function() {
   'use strict';

   let numCounters = 0;

   return {
     getCounters: function () {
        return numCounters;
     },
     createCounter: function () {
        let counter = 0;

        numCounters++;

        return {
            incrementCounter: function () {
                return counter++;
            },
            getCount: function () {
                 return counter;
            }
        };
    }
 };

}());

