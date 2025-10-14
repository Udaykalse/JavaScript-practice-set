function secondLargest(arr){
    const unique=[...new Set(arr)];
    unique.sort((a,b)=>b-a);
    return unique[1];
};

console.log(secondLargest([10, 20, 4, 45, 99, 99]));