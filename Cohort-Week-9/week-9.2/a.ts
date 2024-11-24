const x: number = 1;
console.log(x);

function greet(firstname: string) {
    console.log("Hello " + firstname)
}

greet("Rohit");

// type inference
function sum(a: number, b: number): number {
    return a + b;
}

const value = sum(5, 10);
console.log(value);

function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let a = isLegal(18);

function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1S(function() {
    console.log("Hii there");
})