const user = {
  name: "Uday",
  skills: { frontend: "React" }
};

const SCopy={...user};
SCopy.name="Kalse";
SCopy.skills.frontend="Vue";
console.log(user.skills.frontend);
console.log(user.name);