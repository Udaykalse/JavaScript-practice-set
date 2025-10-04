const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = {};
for (let fruit of fruits) {
    count[fruit] = (count[fruit] || 0) + 1;
};
console.log(count);