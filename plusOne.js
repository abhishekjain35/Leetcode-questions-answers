var plusOne = function (digits) {
    if (digits.length === 1 && digits[0] == 9) {
        return [1, 0];
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9 && i > 0) {
            digits[i] = 0;
            continue;
        }
        digits[i] += 1;
        return digits.join("").split("");
    }
};

/**
 Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

 */
