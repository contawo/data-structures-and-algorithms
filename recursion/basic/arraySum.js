// Write a recursive function to calculate the sum of all elements in an array.

function findSum(array) {
    if (array.length === 1) {
        return array[0]
    }
    let newArray = []
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i])
    }

    return array[array.length - 1] + findSum(newArray)
}

console.log(findSum([1, 2, 3]))