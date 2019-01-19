import { uniq } from "lodash";
import { insane } from "insane";
import jsonp from "jsonp";
import apiKey from "./config";
// this is a default export syntax
// using relative path since this is a local file, not a node module
// no need to put js
import { apiKey2, sayHello } from "./config";
// this is a named export syntax

import User, { createURL, gravatar } from "./user";

const rui = new User("Rui Huang", "ruihuang@ruihuang.io", "ruihuang.io");
const profile = createURL(rui.name);
console.log(profile);

const image = gravatar(rui.email);
console.log(image);
