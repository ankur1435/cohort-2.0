"use strict";
class DateClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getTime() {
        var d = new Date();
        return d.getTime();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimeZone() {
        return this.timeZone;
    }
    expensiveOperations() {
        // here
        const startTime = new Date().getTime(); ///
        let ctr = 0;
        for (let i = 0; i <= 10000000000; i++) {
            ctr++;
        }
        console.log(ctr);
        const endTime = new Date().getTime(); ///
        console.log("Total time taken is " + (endTime - startTime) + " ms");
        // here 
    }
}
const dateObject = new DateClass("IND");
const response = dateObject.expensiveOperations();
console.log(response);
