// function currying

function currying(a){
    return function(b){
        return a+b;
    };
};

console.log(currying(1)(2));