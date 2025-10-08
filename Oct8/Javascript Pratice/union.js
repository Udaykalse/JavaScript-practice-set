function union(a,b){
    return [...new Set([...a,...b])];
}

console.log(union([1,2,3,4],[6,7,8,9]));