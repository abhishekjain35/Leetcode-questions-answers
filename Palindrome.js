// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

var isPalindrome = function (x) {
    let toBeReversed = x;
    if (toBeReversed < 0) {
        return false;
    }
    var reversed = 0;
    while (toBeReversed > 0) {
        reversed *= 10;
        reversed += toBeReversed % 10;
        toBeReversed -= toBeReversed % 10;
        toBeReversed /= 10;
    }
    return x === reversed ? true : false;
};

console.log(isPalindrome(123));
