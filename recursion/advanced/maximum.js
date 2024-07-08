// A program that finds the maximum number in an array
let testArray = [1, 4, 6, 22, 3, 13, 9]

// First approach : Sorting
function maximum(array) {
    return array.sort((a, b) => a - b)[array.length - 1]
}

console.log(maximum(testArray))
// Output: 22

// Second approach : Recursion
function findMax(array) {
    let maximum = 0

    function searchMax(arr) {
        if (arr.length === 0) return null;

        if (arr[0] > arr[arr.length - 1]) {maximum = arr[0]} 
        else {maximum = arr[arr.length - 1]}

        return searchMax(arr.slice(1, arr.length))
    }

    searchMax(array)
    return maximum
}

console.log(findMax(testArray))
// Output: 22

// Third approach : Divide and conquer

function getMax(...args) {
    let max = -Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i]
        }
    }
    return max
}

function findArrayMaximum(array) {
    if (array.length === 0) return null;
    return findMaximum(0, array.length - 1, array)
}

function findMaximum(firstIndex, lastIndex, arr) {
    if (firstIndex === lastIndex) return arr[firstIndex];

    let midpoint = Math.floor((firstIndex + lastIndex) / 2)
    return getMax(findMaximum(firstIndex, midpoint, arr), findMaximum(midpoint + 1, lastIndex, arr))
}

console.log(findArrayMaximum(testArray))
// Output: 22

// Fourth approach : For loop

function forMax(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(forMax(testArray))
// Output: 22