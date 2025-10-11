function reverseStr(str) {
    // let revStr=str.split('').reverse().join('');
    // return revStr;
    let revStr = '';
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
return revStr;

}

console.log(reverseStr('Hello'));

