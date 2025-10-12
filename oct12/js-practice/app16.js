function sumArray(Arr) {
    return Arr.reduce((sum, num) => sum + num, 0);
    //   return arr.reduce((sum, num) => sum + num, 0);
};
console.log(sumArray([19, 1, 0]));