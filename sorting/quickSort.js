// A program that sorts an array using quick sort
let testArray = [1, 4, 7, 2, 9, 3];

function partition(arr, start = 0, end = arr.length - 1) {
    let pointerIndex = end;

    for (let i = end; i >= start + 1; i--) {
        if (arr[i] >= arr[start]) {
            [arr[i], arr[pointerIndex]] = [arr[pointerIndex], arr[i]]
            pointerIndex -= 1
        }
    }
    [arr[start], arr[pointerIndex]] = [arr[pointerIndex], arr[start]]

    return pointerIndex;
}

console.log(partition(testArray))
console.log(testArray)