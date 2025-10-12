function isAnagram(str1,str2){
    if(str1.length!==str2.length) return false;
    let str11 = str1.toLowerCase().split('').sort().join('');
    let str22 = str2.toLowerCase().split('').sort().join('');
    return str11 === str22.toLowerCase();
};

console.log(isAnagram("listen", "silent")); // 👉 true ?
