function mirrorString(input) {
    return input.split('').reverse().join('');
}

let originalString = "hello";
let mirroredString = mirrorString(originalString);

console.log("Original String: " + originalString);
console.log("Mirrored String: " + mirroredString);
