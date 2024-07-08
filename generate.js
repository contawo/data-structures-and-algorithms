function generateArray(len) {
    return Array.from({ length: len }, () => Math.floor(Math.random() * 100) + 1);
}

function generateNumber() {
    return Math.floor(Math.random() * 21);
}

module.exports = { generateArray, generateNumber }