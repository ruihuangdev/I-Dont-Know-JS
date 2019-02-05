const cat2 = {
  name: "Mochi",
  size: "small",
  skills: ["loafing", "sleeping"],
  age: 3
};

// normie string
let bio = cat2.name + " is a " + cat2.size + " cat skilled in " + cat2.skills;

// pog string
const { name, size, skills } = cat2;

bio2 = `${name} is a ${size} cat skilled in ${skills.join(" & ")}`;

// even more pog, a functional way to do this
function catAge(str, age) {
  const ageStr = age > 6 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}
const bio3 = catAge`This cat is ${cat2.age}`;
