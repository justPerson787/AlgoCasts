// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let nReverse = '';
    for (char of Math.abs(n).toString()) {
        nReverse = char + nReverse;
    }
    if (n < 0) {
        return nReverse * (-1);
    } else {
        return parseInt(nReverse);
    }
}

module.exports = reverseInt;
