// A programing that calculates the sum of all the numbers in the array
let testArray = [2, 1, 0, -4, 3, 6, 7, 5]

// First approach : Recursion
function summing(array) {
    if (array.length === 1) return array[0]
    return array[0] + summing(array.slice(1))
}

console.log(summing(testArray))
// Output: 20

// Second approach : Divide and conquer
function getSum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

function findArraySum(array) {
    if (array.length === 0) return 0
    return findSum(array)
}

function findSum(array) {
    if (array.length === 1) return array[0];

    let midpoint = Math.floor(array.length / 2)
    return getSum(findSum(array.slice(0, midpoint)), findSum(array.slice(midpoint)))
}

console.log(findArraySum(testArray))
// Output: 20