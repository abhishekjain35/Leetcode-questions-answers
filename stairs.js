var climbStairs = function(n) {
    if(n< 4) return n;
    let arr = [0,1,2]
    for(let i =3; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
};


/**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

*/