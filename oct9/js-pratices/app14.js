function longestConsecutive(arr) {
    const set = new Set(arr);
    let longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num, length = 1;
            while (set.has(curr + 1)) { curr++; length++; }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
