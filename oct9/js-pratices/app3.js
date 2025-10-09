function majorityElement(arr) {
    const count=[];
    for(let num of arr){
        count [num]=(count[num]||0)+1;
        if(count[num]>arr.length/2) return num;
    };


};

console.log(majorityElement([3,3,4,2,3,3,5]));