function missingNumber(arr,n){
    const total=(n*(n+1))/2;
    const sumArr=arr.reduce((a,b)=>a+b,0);
    return total-sumArr;
}

console.log(missingNumber([1,2,4,5],5));