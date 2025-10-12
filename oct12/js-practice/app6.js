function countVowels(str){
    const vowels="aeiouAEIOU";
    let c=0;
    for(let ch of str){
        if(vowels.includes(ch)) c++;
    };
    return c;
}


console.log(countVowels("JavaScript")); 