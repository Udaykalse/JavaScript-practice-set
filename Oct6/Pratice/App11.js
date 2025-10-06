function test(a, b) {
    arguments[0]=10;
    arguments[1]=20;
    console.log(a,b);
};

test(5,6); //10 20