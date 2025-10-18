function marObj(obj1, obj2){
    return {...obj1,...obj2};
}

const a={name:'Uday',age:25};
const b={name1:'Aman', age1:26};

console.log(marObj(a,b));