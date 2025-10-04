function FactNum(n){
    if(n===0 || n===1) return 1;
    return n*FactNum(n-1);
};

console.log(FactNum(5));