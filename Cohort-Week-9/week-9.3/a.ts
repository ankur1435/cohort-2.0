enum Direction {
    up,
    down,
    left,
    right
}

function doSomething(keyPressed: Direction) {
    if(keyPressed == Direction.up) {
        
    }
}

const value1 = doSomething(Direction.up);
console.log(value1);
const value2 = doSomething(Direction.down);
console.log(value2);
const value3 = doSomething(Direction.left);
console.log(value3);
const value4 = doSomething(Direction.right);
console.log(value4);

export function add(x: number, y: number) {
    return x + y;
}

export function sub(x: number, y: number) {
    return x + y;
}