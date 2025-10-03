// Question 15: Transform Array of Objects (map with Objects)

function getFullName(users){
    return users.map(user=>`${user.first} ${user.last}`);
};

const userList = [
  { first: 'John', last: 'Doe' }, 
  { first: 'Jane', last: 'Smith' },
  { first: 'Peter', last: 'Jones' }
];


const names=getFullName(userList);
console.log(names.join(' '));