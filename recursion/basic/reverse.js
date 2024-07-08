// Write a recursive function to reverse a given string.

function reverseString(string) {
    if (string.length === 0) {
        return string.slice(0, string.length)
    } 
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
}

console.log(reverseString("money"))