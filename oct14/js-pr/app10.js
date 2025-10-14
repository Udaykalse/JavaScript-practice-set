function add(x,y){
    return x+y;
};

const multiply=(x,y)=>x*y;

function operate(a,b,fn){
    return fn(a,b);
};

console.log(operate(2,3,multiply));