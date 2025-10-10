function longestUniqueSubstr(s){
    let set=new Set(),left=0,maxLen=0;
    for (let right=0;right<s.length;right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
    }
    set.add(s[right]);
    maxLen=Math.max(maxLen,set.size);
    }
    return maxLen;
}

console.log(longestUniqueSubstr("abcabcbb"));