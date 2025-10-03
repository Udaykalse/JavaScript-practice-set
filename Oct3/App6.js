// 3. Practical Coding Problems
function findMax(arr) {
    return arr.reduce((max, curr) => (curr > max ? curr : max));
};

const values=[5,1,99,100,10,42];
const maxVal=findMax(values);
console.log(maxVal);