/*
Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
Hint: Compare the string to its reverse.

*/


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Example Usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("madam"));   // true