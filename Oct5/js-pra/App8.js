const arr = [1, 2, 2, 3, 4, 4, 5];
const unArr=arr.filter((i,c)=>arr.indexOf(i)===c);
console.log(unArr);