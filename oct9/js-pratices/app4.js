function rotateByOne(arr){
    arr.unshift(arr.pop());
    return arr;
};

console.log(rotateByOne([1,2,3,4]));