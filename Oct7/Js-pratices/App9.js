let arr=[1,2,3];
let arr1=[4,5,6];

let MergeArr=[...new Set([...arr,...arr1])]

console.log(MergeArr);