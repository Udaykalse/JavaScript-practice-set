function curry(fn){
    return function curried (...args){
        if(args.length>=fn.length) return fn(...args);
        return (...next)=>curried(...args,...next);
    }
};


function sum(a,b,c){return a+b+c};

const curriedSum=curry(sum);

function curry(fn){
    return function (a){
        return function (b){
            return fn+a+b
        }
    }
}
console.log(curry(1)(2)(3));