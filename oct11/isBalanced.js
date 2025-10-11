function isBalanced(S){
    const stack=[],map={'(':')','{':"",'{':'}','[':']'};
    for (let char of S){
        if(map[char]) stack.push(char);
        else{
            if(char!==map[stack.pop()]) return false;
        }
    }

    return stack.length===0;
}
console.log(isBalanced("{[()]}"));