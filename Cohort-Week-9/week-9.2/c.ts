function identity<T>(arg: T) {
    return arg;
}

let output1 = identity<string>("MyString");
let output2 = identity<number>(100);

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["rohit", "pithani"]);
console.log(el.toUpperCase());

import { add, sub } from './b';

add(1,2);
sub(10,5);