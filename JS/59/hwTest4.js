'use strict';
 //calling Q2. 
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     window.app.counter.incrementCounter();
     console.log(window.app.counter.getCount()); 

 //calling Q3. 
    const counterNum1 = window.app.CreateCounters.createCounter();
    counterNum1.incrementCounter();
    counterNum1.incrementCounter();
    counterNum1.incrementCounter();
    counterNum1.incrementCounter();
    counterNum1.incrementCounter(); 
    console.log('counterNum1', counterNum1.getCount());   

    const counterNum2 = window.app.CreateCounters.createCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    counterNum2.incrementCounter();
    console.log('counterNum2', counterNum2.getCount());

    console.log('created counters', window.app.CreateCounters.getCounters());


