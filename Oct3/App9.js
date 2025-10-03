// 4. Intermediate Array Operations

function areAllPos(arr) {
    return arr.every(num => num > 0);
};

const arr1=[1,5,8,10];
const arr2=[1,-5,8,10];

console.log(`[1, 5, 8, 10] are all positive: ${areAllPos(arr1)}`); 
console.log(`[1, -5, 8, 10] are all positive: ${areAllPos(arr2)}`);
























