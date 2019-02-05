// Objects
const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 45 };

// to assign stats to pikachu object

// normie way to do this
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;

// not only is this troublesome
// it is also mutating the original, not creating a new immutable object
// if pikachu levels up, we want to have an object for each level
// such as:
const lv10 = Object.assign(pikachu, stats);
// merge from left to right

const lv11 = Object.assign(pikachu, { hp: 45 });
// add a single property

// pog way to do this
const lv10New = { ...pikachu, ...stats };
const lv11New = { ...pikachu, hp: 45 };

// spread can also be done on arrays
let pokemon = ["Wobbafett", "Psyduck", "Pikachu"];
// we want to add to this array
// normie way:
pokemon.push("Bulbasaur");
pokemon.push("Charmander");
pokemon.push("Squirtle");

// pog way:
pokemon2 = [...pokemon, "Bulbasaur", "Charmander", "Squirtle"];
// you can do it however you like
pokemon3 = ["Bulbasaur", ...pokemon, "Charmander", "Squirtle"];
