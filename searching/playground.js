// This is where I will be testing my knowledge
let testArray = [1, 4, 7, 2, 9, 3];

function search(array, item) {
    if (array[0] === item && array.length === 1) {
        return true
    }
    let midpioint = Math.floor(array.length / 2)
    if (item >= array[midpioint]) return search(array.slice(midpioint), item);
    if (item <= array[midpioint]) return search(array.slice(0, midpioint), item);

    return false
}

let sorted = testArray.sort((a, b) => a - b)
console.log(search(sorted, 0))
// console.log(arr[0])