function flatten(arr){
    return arr.flat(Infinity);
}

console.log(flatten([1,[2,[5],3],4]));