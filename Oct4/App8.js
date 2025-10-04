function Foo(){
    console.log('A');
    var a=10;
    function a(){};
    console.log(a);
    
};
Foo();