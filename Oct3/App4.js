// Question 4: Filter Even Numbers (filter)
function getEvenNum(arr) {
    return arr.filter(nums => nums % 2 === 0);
};

const allNumbers=[10,20,3,5,15,6];
const even=getEvenNum(allNumbers);
console.log(even);