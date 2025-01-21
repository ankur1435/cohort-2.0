import { measure } from "helpful-decorators";
class DateClass {
    private timeZone: string;
    constructor(timeZone: string) {
        this.timeZone = timeZone;
    }

    @measure
    getTime() {
        var d = new Date();
        console.log("hi from getTime");
        return d.getTime();
    }
}

const dateObject = new DateClass("IND");
const response = dateObject.getTime();
console.log(response);