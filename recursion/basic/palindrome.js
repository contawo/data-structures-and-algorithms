// Write a recursive function to check if a given string is a palindrome.

function palindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true
    }
    if (str[0] != str[str.length - 1]) {
        return false
    }
    return palindrome(str.slice(1, str.length - 1))
}

console.log(palindrome("redavider"))