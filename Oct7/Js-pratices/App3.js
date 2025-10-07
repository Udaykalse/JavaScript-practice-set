function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
};

console.log(reverseNum(5436))