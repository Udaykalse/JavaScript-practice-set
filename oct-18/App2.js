function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const forStr1=str1.toLowerCase().split('').sort().join('');
     const forStr2=str2.toLowerCase().split('').sort().join('');
     return forStr1===forStr2;
}

console.log(isAnagram("listen","siZent"));