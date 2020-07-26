//Q2. 
window.app = window.app || {};
window.app.counter = (function() {
  'use strict';

  let counter = 0;

  return {
    getCount: function () {
       return counter;
    },
    incrementCounter: function () {
       counter++;
    }
};

}());