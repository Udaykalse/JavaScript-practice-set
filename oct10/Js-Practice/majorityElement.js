function majorityElement(arr){
    const freq={};
    for(let num of arr){
        freq[num]=(freq[num] || 0)+1;
        if(freq[num]>arr.length/2) return num;
    }
    return null;
}

console.log(majorityElement([3,3,4,2,3]));