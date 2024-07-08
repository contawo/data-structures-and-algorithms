// Write a function that finds all unique combinations of numbers in an array that sum up to a given target number. Each number in the array may only be used once in each combination.

function combination(array, target) {
    let combinations = [];
    let sortedArray = array.sort((a, b) => a - b);

    function checkCombinations(target, combs, start) {
        if (target === 0) {
            combinations.push([...combs]);
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = start; i < sortedArray.length; i++) {
            if (sortedArray[i] > target) break; // No need to continue if the number exceeds the target
            combs.push(sortedArray[i]);
            checkCombinations(target - sortedArray[i], combs, i); // Not i + 1 because we can reuse the same element
            combs.pop(); // Backtrack
        }
    }

    checkCombinations(target, [], 0);
    console.log(combinations);
}

combination([2, 3, 6, 7], 7);