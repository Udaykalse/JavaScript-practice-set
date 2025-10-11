function dupArr(arr){
    return [...new Set(arr)];
}

console.log(dupArr([1,1,2,3,4,3,6,9,6,4,3,8,0,6,0,4]));