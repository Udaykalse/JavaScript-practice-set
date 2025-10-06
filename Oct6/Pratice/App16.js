async function test(){
    try{
        return await Promise.reject("Error");
    }catch(e){
        return "Caught!";
    };
};
test().then(console.log); //Caught!