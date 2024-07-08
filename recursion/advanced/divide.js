// A program that splits and array into invidual components

function divide(array) {
    let results = []

    function conquer(array) {
        if (array.length === 1) {
            results.push(array)
            return 
        }
        conquer(array.slice(0, Math.floor(array.length / 2)))
        conquer(array.slice(Math.floor(array.length / 2)))
    }

    conquer(array)
    return results
}

console.log(divide([2, 1, 0, -4, 3, 6, 7, 5]))
// Output: [[ 2 ], [ 1 ], [ 0 ], [ -4 ], [ 3 ], [ 6 ], [ 7 ], [ 5 ]]