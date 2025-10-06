function mystery(x,y=()=>x){
    let x=2;
    return [x,y()];
};

console.log(mystery(5)); //ReferenceError