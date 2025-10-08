// function mergeSorted(a, b) {
//     let res = [], i = 0, j = 0;
//     while (i < a.length && j < b.length) {
//         if (a[i] < b[j]) res.push(a[i++]);
//         else res.push(b[j++]);
//     }
//     return res.concat(a.slice(i)).concat(b.slice(j));
// }

// console.log(mergeSorted([1, 3, 5], [2, 4, 6]));


function seMer(a,b){
    const one=new Set([...a,...b]);
    return [...one]
}

console.log(seMer([1, 3, 5], [2, 4, 6]));