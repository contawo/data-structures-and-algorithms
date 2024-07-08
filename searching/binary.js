// A program that searches for an item in a list using binary search
const {generateNumber, generateArray} = require("../generate");
const present = require("../present")

const arr = generateArray(25)
const find = generateNumber()

function binarySearch(array, target, start = 0, end = array.length - 1) {
    if (start > end) return -1 // Base case

    let midpioint = Math.floor((end + start) / 2)
    if (array[midpioint] === target) return midpioint;

    if (target > array[midpioint]) return binarySearch(array, target, midpioint + 1, end)
    if (target < array[midpioint]) return binarySearch(array, target, start, midpioint - 1)
}

const sorted = arr.sort((a, b) => a - b)
present(find, sorted, binarySearch(sorted, find))