// Find Second Largest Element

function secondLargest(arr) {
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return {Largest :unique[1], Smallest :  arr[1]}
};

console.log(secondLargest([1, 2, 3, 4, 5]));
console.log(secondLargest([10, 20, 4, 45, 99, 99]));