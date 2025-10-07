function findMaxMin(arr){
    return {
        max:Math.max(...arr),min:Math.min(...arr)
    };
}

console.log(findMaxMin([1,6,5,4]));