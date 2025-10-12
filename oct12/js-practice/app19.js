function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,3,2,5,1,8,5,9,3,1,2]))