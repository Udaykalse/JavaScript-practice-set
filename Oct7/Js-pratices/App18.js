// Sort Array Ascending & Descending
const Arr=[4,3,6,8,1];
const asc=[...Arr].sort((a,b)=>a-b);
const dsc=[...Arr].sort((a,b)=>b-a);

console.log(`Ascending :- ${asc} And Descending:- ${dsc}`);