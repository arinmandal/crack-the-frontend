// Todo: Objects

//? Object creation and access
/* let obj = {
  name: "Rohit",
  age: 25,
};
// Dot Notation
console.log(obj.name);

// Bracket Notation

console.log(obj["age"]);
 */

// ? Key value structure

// let obj = {
//   name: 'Rahul',
//   age : 45
// }

// ? Nesting and Deep access

/* let studentDetails = {
  name: "A",
  age: 2,
  address: {
    vill: "blr",
    post: "lavan",
    ps: "ndk",
    pin: 721633,
  },
};

console.log(studentDetails.address.pin); */

// ? destructuring

/* let { post } = studentDetails.address;
console.log(post);
 */

/* let newObj = {
  name: "Dell",
  Model: "Inspiron 5000",
  serviceTag: "3MF5262",
}; */

//? Loop in object
/* for (let key in newObj) {
  // This key will print key name
  // console.log(key);

  // access both key and value
  console.log(key, newObj[key]);
}
 */

// ? Object.keys()

// This will return array object keys
// console.log(Object.keys(newObj));

// ? Object.entries()

// console.log(Object.entries(newObj));

// Todo: Coping object, spread, deep clone.

let abc = {
  name: "A",
  age: 27,
  transform: "Capital",
  method: {
    uppercase: "toUppperCase",
    lowercase: "toLowerCase",
  },
};

// ? Spread
/* let bcd = { ...abc };
console.log(bcd.transform);
 */

// ? Object Assign

/* let newObj = Object.assign({ letterCount: 1 }, abc);
console.log(newObj); */

// ? deep clone
/* 
let xyz = JSON.parse(JSON.stringify(abc));
console.log(xyz);
 */

// ? Optional Chaining

// console.log(abc.method?.lowercase);
