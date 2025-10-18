function findDuplicates(arr) {
    const seen = {}, dup = [];
    for (let num of arr) {
        if (seen[num]) dup.push(num);
        else seen[num] = 1;
    }

    return dup.sort();
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5, 4]))