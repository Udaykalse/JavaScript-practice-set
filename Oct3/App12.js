// Question 12: Flatten an Array (flat)

function flattenoneLev(nextArr){
    return nextArr.flat(2);
};

const nextesd=[1,2,[3,4],5,7,[8,[9,0]]];

const flatRes=flattenoneLev(nextesd);

console.log(flatRes);


