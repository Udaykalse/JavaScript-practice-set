function countOccurrences(arr) {
    let count={};
    for(let item of arr){
        count[item]=(count[item]||0)+1;
    };
    return count;
};

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
