const user = {
  name: "Uday",
  address: {
    city: "Pune",
    zip: 411001
  }
};

console.log(user.address?.city);
console.log(user.address?.country?.name);