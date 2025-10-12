function findsecondLargest(arr){
    let sortArr=arr.sort((a, b) => a - b);
    let secondLar=sortArr.length-2;
    console.log(sortArr);
    return sortArr[secondLar];
}

console.log(findsecondLargest([100, 45, 32, 67, 89]));