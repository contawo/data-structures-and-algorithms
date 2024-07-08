// Write a recursive function to calculate the power of a number (e.g., a**b)

function power(num, pow) {
    if (pow === 0) {
        return 1
    }
    return num * power(num, pow - 1)
}

console.log(power(8, 2))
