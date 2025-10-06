function Person(name){
    this.name=name;
};

const BoundPer=Person.bind(null,"Uday");
const person=new BoundPer();
console.log(person.name);  //Uday

