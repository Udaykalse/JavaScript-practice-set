function removeDuli(arr){
    return [...new Set(arr)];
};

console.log(removeDuli([1,2,3,4,3,2,1]));