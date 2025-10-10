function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Examples
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("evil", "vile"));     // true
console.log(areAnagrams("hello", "world"));   // false
