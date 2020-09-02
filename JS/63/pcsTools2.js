window.pcs = function (id) {
  'use strict';

  function getColorPart() {
    return Math.floor(Math.random() * 256);
  }
  function getRandomColor() {
    const r = getColorPart();
    const g = getColorPart();
    const b = getColorPart();

    return `rgb(${r},${g},${b})`;
  }

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {

    return getComputedStyle(element)[property];
  }

  const theElem = get(id);

  return {
    css: function (property, value) {
      if (arguments.length < 2) { // get
        return getCss(theElem, property);
      }
      setCss(theElem, property, value);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener('click', callback);
      return this;
    },
    hide: function () {
      setCss(theElem, 'display', 'none');
      return this;
    },
    show: function () {
      setCss(theElem, 'display', 'block');
      return this;
    },
    flash: function (flashLen, flashSpeed = 100) {
      let inter;
      inter = setInterval(() => setCss(theElem, 'backgroundColor', getRandomColor()), flashSpeed);
      setTimeout(
        () => clearInterval(inter), flashLen);

      return this;
    }
  };
};