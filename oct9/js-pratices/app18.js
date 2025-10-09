function productExceptSelf(arr) {
    const n = arr.length;
    const left = Array(n).fill(1), right = Array(n).fill(1), result = Array(n);
    for (let i = 1; i < n; i++) left[i] = left[i-1] * arr[i-1];
    for (let i = n-2; i >= 0; i--) right[i] = right[i+1] * arr[i+1];
    for (let i = 0; i < n; i++) result[i] = left[i] * right[i];
    return result;
}

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
