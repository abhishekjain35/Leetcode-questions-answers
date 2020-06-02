// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

// Example 2:

// Input: "()[]{}"
// Output: true

// Example 3:

// Input: "(]"
// Output: false

var isValid = function (s) {
    let arr = [];
    if(s.length%2 !== 0){
        return false
    }
    let pair = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const para of s) {
        if (para === "(" || para === "[" || para === "{") {
            arr.push(para);
        }
        else if (arr[arr.length - 1] === pair[para]) {
            arr.pop();
        } else {
            continue;
        }
    }
    return arr.length ? false : true;
};

console.log(isValid("(])"));
