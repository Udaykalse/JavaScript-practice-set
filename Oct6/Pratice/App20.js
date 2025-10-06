const obj={};
Object.defineProperty(obj,"prop",{
    value:42,
    writable:false,
});

obj.prop=50;
console.log(obj.prop); //42