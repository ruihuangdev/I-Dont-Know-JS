// let's create a function that returns a promise that resolves to a random number asynchrously
const random = () => {
  return Promise.resolve(Math.random());
};

// we want to get three numbers asynchrously and add them together
// normie way
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then(val => {
      first = val;
      return random();
    })
    .then(val => {
      second = val;
      return random();
    })
    .then(val => {
      third = val;
      return first + second + third;
    })
    .then(val => {
      console.log(`Result ${val}`);
    });
};

// pog way to do this
const sumRandomAsyncNums2 = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first + second + third}`);
};
