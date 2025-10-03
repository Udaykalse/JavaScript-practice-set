// 5. Coding Puzzles & Interview Classics
// Question 14: Reverse an Array (Manual)

function revArrManu(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

const chars=['a','b','c','d','e'];
console.log(revArrManu(chars))