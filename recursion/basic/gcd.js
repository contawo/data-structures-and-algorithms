// Write a recursive function to find the GCD of two given numbers using the Euclidean algorithm.

function gcd(a, b) {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}

console.log(gcd(48, 18))