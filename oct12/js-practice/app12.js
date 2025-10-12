function add(a,b,c){
    return a+b+c;
};

function curryAdd(a){
    return function(b){
        return function (c){
            return a+b+c;
        };
    };
};

console.log(curryAdd(9)(2)(1));
// console.log(add(9)(2)(1))
