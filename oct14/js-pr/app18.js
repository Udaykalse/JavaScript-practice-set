const person={
    name:'Aman',age:24,city:'Murud'
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const job={role:"Developer"};
const mereged={...job,...person};
console.log(mereged);