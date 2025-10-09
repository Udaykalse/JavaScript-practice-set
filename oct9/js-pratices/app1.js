function rearrangePosNeg(arr) {
    arr.sort((a, b) => a - b);
    let pos = arr.filter(x => x >= 0);
    let neg = arr.filter(x => x < 0);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // result.push(i % 2 === 0 ? (pos.shift() || neg.shift()) : (neg.shift() || pos.shift()));
    result.push(i % 2 === 0 ? (pos.shift() || neg.shift()) : (neg.shift() || pos.shift()));
    };
    return result
};
console.log(rearrangePosNeg([-1, 2, -3, 4, 5, -6])); // [2,-1,4,-3,5,-6]