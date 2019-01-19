const apiKey = "verysecretiveapikey";

// in order to make apikey usable outside of this module, we need to export it
// there are two ways to do this
// default export allows you to export it as the default
// that means you can name it anything you like when you import it
// named export means you export it as a varible name
// when being imported, the name must be specified

// default export
// you can import it as import blahblah from 'config'
// doesn't really matter
export default apiKey;

// every module can have one default export and multiple named exports
// named export
export const apiKey2 = "verysecretiveapikey";

// you can export functions too
export function sayHello(name) {
  console.log(`Hello there ${name}`);
}

const dog = "Bruh";
const cat = "Mochi";

// export multiple at once
export { dog, cat };
