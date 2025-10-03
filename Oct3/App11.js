// Question 11: Format a List into a Sentence (join)

function formatSent(words){
    const sent =words.join(' ');
    return sent.toUpperCase();
};

const words=['hello','world','Javascript','is','fun'];

const res=formatSent(words);

console.log(res);

