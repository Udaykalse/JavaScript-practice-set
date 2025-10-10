console.log("Start");
process.nextTick(()=>{
    console.log("Inside");
})

console.log('End');

// console.log("Start");

// process.nextTick(() => {
//     console.log("Inside");
// });

// console.log("End");
