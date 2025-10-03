const users = [
    { id: 1, name: "Aman", age: 24 },
    { id: 2, name: "Pravaj", age: 22 },
    { id: 3, name: "Siddharth", age: 26 },
    { id: 4, name: "farhan", age: 22 },


];

const  filteredArray=users.filter(user=>user.age===22);
console.log(filteredArray);
const  findArray=users.find(user=>user.age===22);
console.log(findArray);