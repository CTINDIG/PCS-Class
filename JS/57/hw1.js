//Q1.
window.myApp = window.myApp || {};

window.myApp.utils = (function (utils) {
    'use strict';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        utils.getDayName = function (index) {
            return daysOfWeek[index - 1];
        };
        utils.getDayNumber = function (name) {
            return daysOfWeek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        };
    return utils;
}(window.myApp.utils || {}));
