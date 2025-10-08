function ispalindrome(str){
 const revStr=str.split('').reverse().join('');
 return str===revStr;
}

console.log(ispalindrome("Madam"))