const str = "Hello";
let rev = "";
for (let index = str.length-1; index >= 0; index--) {
    rev += str[index];

};

console.log(rev);