function rotate(arr,k){
    k%arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}

console.log(rotate([1,2,3,4,5],2))