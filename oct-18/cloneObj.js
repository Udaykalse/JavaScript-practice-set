const obj={a:1,b:{c:2}};
const clone=JSON.parse(JSON.stringify(obj));
console.log(clone);
console.log(clone.keys===obj.keys);