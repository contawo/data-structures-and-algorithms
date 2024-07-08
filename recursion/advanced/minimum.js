// A program that finds the minimum value in an array using the divide and conquer method
// by recursively dividing the array into three parts and comparing their minimum values.

let testArray = [1, 4, 6, 22, -5, 3, 13, 9]

function getMin(...args) {
    let min = Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i]
        }
    }
    return min
}

function findMinimum(array) {
    if (array.length === 0) return null;
    return findMin(array)
}

function findMin(arr) {
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return getMin(findMin([arr[0]]), findMin([arr[1]]))

    let midOne = Math.floor(arr.length / 3);
    let midTwo = Math.floor(2 * (arr.length / 3));

    return getMin(findMin(arr.slice(0, midOne)), findMin(arr.slice(midOne, midTwo)), findMin(arr.slice(midTwo)));
}

console.log(findMinimum(testArray))
// Output: -5