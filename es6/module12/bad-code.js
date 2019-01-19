/* globals twttr ga */
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise.all([weather, tweets]).then((responses) => {
  const [weatherInfo, tweetInfo] = responses;
  console.log(weatherInfo, tweetInfo);
});

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch(
  'http://data.ratp.fr/api/datasets/1.0/search/?q=paris',
);

Promise.all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then((responses) => {
    console.log(responses);
  });

// declare global vars which eslint will complain if not declared at the beginning of the file

ga.track();
twttr.trackConversion();

// an array method polyfill that eslint will complain if we do not disable certain rules

/* eslint-disable */
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this);
      const len = o.length >>> 0;

      if (len === 0) {
        return false;
      }
      const n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }
      while (k < len) {
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}
/* eslint-enable */
