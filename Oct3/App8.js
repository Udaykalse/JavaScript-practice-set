// Question 8: Count Element Occurrences

function countOcc(arr){
    return arr.reduce((cMap,i)=>{
        cMap[i]=(cMap[i]||0)+1;
        return cMap;
    },{});
};

const words=['apple','banan','apple','orange','banan','apple'];
const Count=countOcc(words);
console.log(Count);


