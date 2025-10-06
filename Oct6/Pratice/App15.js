const arr=[10,2,30,21];
arr.sort();
console.log(arr);//[ 10, 2, 21, 30 ]

arr.sort((a, b) => a - b);
console.log(arr);  //[ 2, 10, 21, 30 ]