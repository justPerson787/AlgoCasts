// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let output = {};
    let max = 0;
    let maxKey = '';
    for (let char of str) {
        if (!output[char]) {
            output[char] = 1;
        } else {
            output[char]++;
        }
    }
    for (let char in output) {
        if (output[char] > max) {
            max = output[char];
            maxKey = char;
        }
    }
    return maxKey;
}

module.exports = maxChar;
