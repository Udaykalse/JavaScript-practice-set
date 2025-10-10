function fibonacci(n) {
    let a = 0, b = 1, ser = [a, b];
    for (let i = 2; i < n; i++) {
        let next = a + b;
        ser.push(next);
        a = b; b = next;
    }
    return ser.slice(0,n)
}

console.log(fibonacci(6));