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

doSomething(Direction.up);
doSomething(Direction.down);
doSomething(Direction.left);
doSomething(Direction.right);

export function add(x: number, y: number) {
    return x + y;
}

export function sub(x: number, y: number) {
    return x + y;
}