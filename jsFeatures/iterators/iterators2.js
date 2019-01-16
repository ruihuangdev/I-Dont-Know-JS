// an actual implementation of iterator

const randomItem = require("./random-item");

const makeCat = () => {
  const catSizes = ["big", "medium", "small"];
  const catColors = ["black", "cream", "white"];
  return randomItem(catSizes) + " " + randomItem(catColors) + " " + "cat";
};

const catArmy = {
  [Symbol.iterator]: () => {
    // one property of catArmy
    return {
      next: () => {
        const enoughCats = Math.random() > 0.75;
        if (!enoughCats)
          return {
            value: makeCat(),
            done: false
          };
        return { done: true };
      }
    };
  }
};

for (const cat of catArmy) {
  cat;
}

// the idea is that iterator doesn't have to be a set length
// it can also be async
