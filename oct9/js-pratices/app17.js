function kthLargest(arr, k) {
    return arr.sort((a,b) => b-a)[k-1];
}

console.log(kthLargest([3,2,1,5,6,4], 2)); // 5
