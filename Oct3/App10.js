// Question 10: Check If Any Element Satisfies a Condition (some)

function hasNeg(arr){
    return arr.some(nums=>nums<0);
};

const arr=[10,20,30];
const arr1=[10,-5,30];
console.log(`[10,20,30] has a negaitive Number:-  ${hasNeg(arr)}`);
console.log(`[10,-5,30] has a negaitive Number:-  ${hasNeg(arr1)}`);











