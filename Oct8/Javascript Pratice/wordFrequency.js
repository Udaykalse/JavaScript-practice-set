function wordFrequency(sen) {
    const words = sen.toLowerCase().split(' ');
    const freq = {};
    for (let w of words) {
        freq[w] = (freq[w] || 0) + 1;
    }
    return freq;

}

console.log(wordFrequency("Hello hello world"));