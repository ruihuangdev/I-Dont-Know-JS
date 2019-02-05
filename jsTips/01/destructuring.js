const cat = {
  name: "Mochi",
  legs: 4,
  paws: true,
  type: "mammal",
  meal: 2,
  diet: "cat food"
};

//normie return
function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} servings of ${animal.diet}`;
  // we are repeating 'animal' a lot
}

// pog return
function feed2({ name, meal, diet }) {
  return `Feed ${name} ${meal} servings of ${diet}`;
}

// OR

function feed3(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} servings of ${diet}`;
}
