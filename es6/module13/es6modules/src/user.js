import slug from "slug";
import { url } from "./config";
import base64 from "base-64";

// make this function default as it is the main one we want to use
export default function User(name, email, website) {
  return {
    name,
    email,
    website
  };
}

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
