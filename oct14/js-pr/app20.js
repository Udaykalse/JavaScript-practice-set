function isAnagram(str1, str2){
    // const newStr=str=>str.toLowerCase().split('').sort().join('');
    // return newStr(str1)===newStr(str2);
    const newStr=str1.toLowerCase().split('').sort().join('');
    const newStr2=str2.toLowerCase().split('').sort().join('');
    return newStr===newStr2;

};

console.log(isAnagram("listen", "silent"));