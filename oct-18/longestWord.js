function longestWord(str) {
    return str.split(' ').reduce((a, b) => b.length > a.length ? b : a, '');

}

console.log(longestWord("I love programming")); 