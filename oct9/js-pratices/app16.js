function findMedianSortedArrays(a, b) {
    const merged = [...a, ...b].sort((x,y) => x-y);
    const n = merged.length;
    return n % 2 === 0 ? (merged[n/2 - 1] + merged[n/2])/2 : merged[Math.floor(n/2)];
}

console.log(findMedianSortedArrays([1,3],[2])); // 2
