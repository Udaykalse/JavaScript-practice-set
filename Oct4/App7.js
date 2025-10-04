console.log("Start"); //1
setTimeout(()=>{
    console.log("SetTImeout"); //5
},0);

Promise.resolve()
    .then(()=>{
        console.log('P1'); //3
    })
    .then(()=>{
        console.log('P2');  //4
    })


console.log("End")  //2