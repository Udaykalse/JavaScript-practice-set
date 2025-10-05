const user = {
  name: "Uday",
  skills: { frontend: "React" }
};

const dCopy=structuredClone(user);
dCopy.skills.frontend="Angulr";
console.log(user.skills.frontend);