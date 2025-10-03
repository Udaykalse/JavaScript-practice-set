// Question 5: Calculate the Sum (reduce)






function sumArray(arr){
    return arr.reduce((acc,currVal)=>acc+currVal,0);
}

const data=[1,2,3,4,5];
const totalSum=sumArray(data);
console.log(totalSum);











