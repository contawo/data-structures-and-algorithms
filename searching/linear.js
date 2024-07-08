// A program that searches for an item in an array linerly
const {generateNumber, generateArray} = require("../generate");
const present = require("../present")

const arr = generateArray(25)
const find = generateNumber()

function linearSearch(array, target, index = 0) {
    if (index >= array.length) return -1; // Base case
    if (array[index] === target) return index;

    return linearSearch(array, target, index + 1)
}

present(find, arr, linearSearch(arr, find))
