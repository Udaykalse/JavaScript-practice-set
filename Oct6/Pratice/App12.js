const obj = {
    "2": "Numaber",
    "1": "one",
    "3": "Three",
    "a": "Letter A",
    "b": "Letter B"
};

console.log(Object.values(obj));//[ 'one', 'Numaber', 'Three', 'Letter A', 'Letter B' ]
console.log(Object.keys(obj));// [ '1', '2', '3', 'a', 'b' ]
console.log(Object.entries(obj));
