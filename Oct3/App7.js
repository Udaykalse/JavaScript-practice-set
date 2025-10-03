// Question 7: Remove Duplicates from an Array

function removedupli(arr){
    return [...new Set(arr)];
};

const item=[1,'a',3,1,'b','a',3];
const uniqueItem=removedupli(item);
console.log(uniqueItem);