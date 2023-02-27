// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {    
    let newStr = '';
    /*for (i = str.length - 1; i>=0; i--) {
        newStr +=str[i]
    }*/
    for (let char of str) {
        newStr = char + newStr;
    };
    return newStr;
}

module.exports = reverse;
