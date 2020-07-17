//Q2. 
window.myApp = window.myApp || {};

window.myApp.utils = (function (utils) {
    'use strict';


        utils.stringCaseInsensitive = function (word, word1) {
            return word.toLowerCase() === word1.toLowerCase();
        };
      
    return utils;
}(window.myApp.utils || {}));
