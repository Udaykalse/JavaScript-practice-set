// Question 2: Remove a Specific Element

function removeElemnt(arr, ele) {
    const index = arr.indexOf(ele);
    if (index !== -1) {
        arr.splice(index, 1);


        console.log(`Removed ${ele}. New array: ${arr}`);
        return true;

    }
    else {
        console.log(`${ele} Not Found`);
        return false;S
    }
}


let colors = ['red', 'green', 'blue', 'green'];
console.log(`Initial Array :- ${colors}`)
removeElemnt(colors,'blue');
removeElemnt(colors, 'yellow');