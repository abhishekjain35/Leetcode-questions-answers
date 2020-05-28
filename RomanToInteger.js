// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

var romanToInt = function (s) {
    let data = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let integers = s.split("");

    let currentRomanInteger,
        currentValueOfRomanInteger,
        nextRomanInteger,
        nextValueOfInteger,
        total = 0;

    for (let i = 0; i < integers.length; i++) {
        currentRomanInteger = integers[i];
        currentValueOfRomanInteger = data[currentRomanInteger];

        nextRomanInteger = integers[i + 1];
        nextValueOfInteger = data[nextRomanInteger];

        if (currentValueOfRomanInteger < nextValueOfInteger) {
            total -= currentValueOfRomanInteger;
        } else {
            total += currentValueOfRomanInteger;
        }
    }
    return total;
};
