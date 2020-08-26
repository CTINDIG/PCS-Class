(function () {
    'use strict';
  
    function get(id) {
      return document.getElementById(id);
    }
  
    function setCss(element, property, value) {
      element.style[property] = value;
    }
  
    let interval;
    const theButton = get('start');
  
  
    let r = 0;
    let g = 0;
    let b = -1;
  
    const INCREMENT = 50;
  
    function startColors() {
      interval = setInterval(() => {
  
        b += INCREMENT;
        if (b >= 256) {
          b = 0;
  
          g += INCREMENT;
          if (g >= 256) {
            g = 0;
  
            r += INCREMENT;
            if (r >= 256) {
              r = 0;
            }
          }
        }
  let backgroundStr = `rgb(${r},${g},${b})`;
  let clrStr = `rgb(${b},${g},${r})`;
        setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
        setCss(document.body, 'color', `rgb(${b},${g},${r})`);

        const clrta = get('clrta');
        const newRow = clrta.insertRow();
        const backgroundc = newRow.insertCell();
        const color = newRow.insertCell();
        const time = newRow.insertCell();
    
        backgroundc.innerHTML = `rgb(${r},${g},${b})`;
        color.innerHTML = `rgb(${b},${g},${r})`;
        time.innerHTML = new Date().toLocaleString();

        newRow.addEventListener('click', function ()  {
            setCss(document.body, 'backgroundColor', backgroundStr);
            setCss(document.body, 'color', clrStr);
        });
  
        theButton.innerHTML = 'stop';
      }, 1000);
    }
  
    function stopColors() {
      clearInterval(interval);
      interval = null;
      theButton.innerHTML = 'start';
    }
  
    get('start').addEventListener('click', function () { 
      if (!interval) {
        startColors();

      } else {
        stopColors();
      }
    });
  }());