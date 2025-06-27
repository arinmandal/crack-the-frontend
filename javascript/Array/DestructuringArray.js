//! Destructuring Array
/* The Destructuring assignment is the important technique introduced in ECMAScript 2015 (ES6) version of JavaScript that provides a shorthand syntax to extract or unpack array elements or properties of an object into distinct variables using a single line of code. In other words, this assignment helps us to segregate data of any iterable as well as non-iterable object and then helps us to use that segregated data individually on need or demand. It makes the code shorter and more readable. */

/* var names = ["alpha", "beta", "gamma", "delta"];

let [first, last] = names;
console.log(first);
console.log(last);
 */

// Object 
const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};

const { name, age, job } = user;
console.log(name, age, job);