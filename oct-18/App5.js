function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function factorialR(n){
    if(n<=1) return 1;
    return n*factorialR(n-1);
}

console.log(factorialR(5));