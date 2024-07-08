// Using divide and conquer to calculate the sum of all the values in the array
let testArray = [2, 1, 0, -4, 3, 6, 7, 5]

function sumValue(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    return sumValue(array.slice(0, Math.floor(array.length / 2))) + sumValue(array.slice(Math.floor(array.length / 2)))
}

console.log(sumValue(testArray))
// Ouput: 20