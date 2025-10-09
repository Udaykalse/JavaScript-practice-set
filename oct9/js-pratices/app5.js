function mergeSortedArrays(Arr1,Arr2){
    return [...Arr1,...Arr2].sort((x,y)=>x-y);
};

console.log(mergeSortedArrays([1,3,5],[2,4,6]));