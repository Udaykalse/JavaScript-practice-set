function allPairsWithSum(arr, target) {
    const seen = new Set();
    const result = [];
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) result.push([complement, num]);
        seen.add(num);
    }
    return result;
}

console.log(allPairsWithSum([1,2,3,4,5], 6)); // [[2,4],[1,5],[3,3] if duplicates exist]
