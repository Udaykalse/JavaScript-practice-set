const obj = {
  name: "Uday",
  address: { city: "Pune" }
};

const deepClon=structuredClone(obj);
const deepClon2=JSON.parse(JSON.stringify(obj));
deepClon.address.city="Mumbai";
console.log(obj.address.city);