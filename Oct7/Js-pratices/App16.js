//  Separate Even and Odd Numbers







function splitEvenOdd(arr){
    const even=arr.filter(num=>num%2===0);
    const odd=arr.filter(num=>num%2!==0);
    return {even, odd};
};

console.log(splitEvenOdd([1,2,3,4,5,6,7,8,9,0,10,11,12,13]))















