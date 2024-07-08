// Write a recursive function to calculate the sum of the digits of a given number.

function findSum(digit) {
    if (digit === 0) {
        return 0
    }
    return digit + findSum(digit - 1)
}

console.log(findSum(3))