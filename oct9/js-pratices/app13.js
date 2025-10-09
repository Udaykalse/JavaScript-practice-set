function hasZeroSumSubarray(arr) {
    const set = new Set();
    let sum = 0;
    for (let num of arr) {
        sum += num;
        if (sum === 0 || set.has(sum)) return true;
        set.add(sum);
    }
    return false;
}

console.log(hasZeroSumSubarray([1,2,-3,4])); // true
