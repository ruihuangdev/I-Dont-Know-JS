import { uniq } from "lodash";
import { insane } from "insane";
import jsonp from "jsonp";
import apiKey from "./config";
// this is a default export syntax
// using relative path since this is a local file, not a node module
// no need to put js
import { apiKey2, sayHello } from "./config";
// this is a named export syntax
const ages = [1, 1, 3, 13, 5, 6];

console.log(uniq(ages));
console.log(apiKey);
console.log(apiKey2);

sayHello("Rui");
