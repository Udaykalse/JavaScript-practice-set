// Question 13: Search for an Element (find)

function findFirstOver(arr,limit){
    return arr.find(num=>num>limit);
};
const temp=[20,35,15,40,25];
const limitTemp=20;

console.log(`First temp over ${limitTemp} : ${findFirstOver(temp,limitTemp)}`);
console.log(`First temp over 50: - ${findFirstOver(temp,35)}`);
