function subarrayWithSum(arr, sum) {
    let currSum = arr[0], start = 0;
    for (let i = 1; i <= arr.length; i++) {
        while (currSum > sum && start < i - 1) currSum -= arr[start++];
        if (currSum === sum) return arr.slice(start, i);
        currSum += arr[i] || 0;
    }
    return [];
}

console.log(subarrayWithSum([1,2,3,7,5], 12)); // [2,3,7]
