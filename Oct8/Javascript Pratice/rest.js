let Arr1=[1,2,3,4,5];
let Arr2=[6,7,8,9,0];

let newArr=[...new Set([...Arr1,...Arr2])];


console.log(newArr);