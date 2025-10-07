function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    },{});
};

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));