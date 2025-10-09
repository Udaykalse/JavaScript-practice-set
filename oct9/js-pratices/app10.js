function findMissingNumber(arr,n){
    const toatl=(n*(n+1))/2;
    const sum=arr.reduce((acc,val)=>acc+val,0);
    return toatl-sum;
};

console.log(findMissingNumber([1,2,4,5,6], 6));