function intersection(a,b){
    return a.filter(x=>b.includes(x));
}

console.log(intersection([1,2,3,4,6],[6,5,7,8,9]));