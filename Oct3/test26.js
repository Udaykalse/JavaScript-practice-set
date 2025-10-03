function isPalindrome(str){
    let rev=str.split('').reverse().join('');
    return rev===str;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("aman"));
