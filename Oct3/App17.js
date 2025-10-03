// Question 17: Concatenate Two Arrays (spread operator)
function mergeArray(arrA,arrB){
    return [...arrA,...arrB];
};

const arr1=[1,2,3];
const arr2=[4,5,6];
const mereg=mergeArray(arr1,arr2);

console.log(mereg);
console.log(arr1,arr2.join('  , '));

