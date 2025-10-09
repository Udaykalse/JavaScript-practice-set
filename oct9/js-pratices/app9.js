function findMinMax(arr){
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    return {Max:max,Min:min};
};

console.log(findMinMax([3, 5, 1, 9, 2]));