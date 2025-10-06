function mystery(x){
    arguments[0]=[10];
    return x;
};

console.log(mystery(5));//[10]