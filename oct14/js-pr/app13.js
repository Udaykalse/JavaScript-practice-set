function greet(name,cal){
    console.log("Hello ", name);
    cal();
};

function sayBye(){
    console.log("GoodBye");
};

greet("Uday",sayBye)