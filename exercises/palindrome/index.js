// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split("").every((character, index) => {
        return character == str[str.length - index - 1];
    })
}

// function palindrome(str) {
//     const test = str.toString();
//     return test === test.split("").reverse().join("");
// }

module.exports = palindrome;
