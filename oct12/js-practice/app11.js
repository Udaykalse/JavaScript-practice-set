const obj = {
  name: "Uday",
  address: { city: "Pune" }
};

const shaClone=Object.assign({},obj);
const shaClone2={...obj};
shaClone.address.city="mumbai";
console.log(obj.address.city);