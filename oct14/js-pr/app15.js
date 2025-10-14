function reverseStatement(str){
    return str.split('').reverse().join('');
};

function reverseStatement1(str){
    return str.split(' ').reverse().join(' ');
}


function reverseEachWord(str){
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
};

console.log(reverseEachWord("I love JavaScript"));
console.log(reverseStatement("I love JavaScript"));
console.log(reverseStatement1("I love JavaScript"));