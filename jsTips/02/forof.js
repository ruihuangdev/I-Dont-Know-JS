const cats = { mochi: "Mo", cookie: "Lo", Liang: "So" };

// one challenge is to iterate over an object
// for (const cat of cats) {
//   console.log(cat); // cats is not iterable
// }

// one way is to change it to a for in loop
for (const key in cats) {
  console.log(cats[key]); // cats is not iterable
}

// or, keep for of, use Object.values to convert
for (const cat of Object.values(cats)) {
  console.log(cat); // cats is not iterable
}

// if you need to loop an object over in different ways,
// use map instead
const cats2 = new Map(
  Object.entries({ mochi: "Mo", cookie: "Lo", Liang: "So" })
);

for (const cat of cats2.values()) {
  console.log(cat); // cats is not iterable
}
