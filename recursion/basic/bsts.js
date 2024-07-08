// Write a recursive function to perform a binary search on a sorted array.

function binarySearch(array, num) {
    if (array.length === 0) return false;
    let midpoint = Math.floor(array.length / 2)

    if (num === array[midpoint]) return true;
    if (num > array[midpoint]) return binarySearch(array.slice(midpoint + 1, array.length), num);

    return binarySearch(array.slice(0, midpoint), num)
}

console.log(binarySearch([1, 3, 6, 7, 9], 6))