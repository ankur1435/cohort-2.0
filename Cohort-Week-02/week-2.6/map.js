const arr = [2,4,6,8,10]

function MyMap(arr, fn) {
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

function transform(i) {
    return i * 2;
}


const ans = MyMap(arr,transform);
console.log(ans);