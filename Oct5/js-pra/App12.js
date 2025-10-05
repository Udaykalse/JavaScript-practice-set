const users = [
    { name: 'Uday', age: 23 },
    { name: 'Ravi', age: 17 },
    { name: 'Amit', age: 19 }
];

const adults = users.filter(user => user.age > 18).map(user => user.name);
console.log(adults);