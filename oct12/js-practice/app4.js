function findMissing(arr){
    const n=arr.length+1; //6+1
    const total=(n*(n+1))/2; //42
    const sum=arr.reduce((a,b)=>a+b,0); //18
    return total-sum ; //21-18
};

console.log(findMissing([1, 2, 4, 5, 6]));