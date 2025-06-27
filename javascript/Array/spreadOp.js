//! Spread operator
// The spread operator in JavaScript is a powerful feature that allows you to unpack elements from arrays or properties from objects. It is represented by three dots (...) and can be used in various contexts to achieve different outcomes. Let's delve into how the spread operator works, particularly with arrays.

let spread = [1, 2, 3, 4, 5, 6];
let afterSpread = [...spread, 7, 8, 9];
console.log(afterSpread); // 1,2,3,4,5,6,7,8,9

let spreadObj = {
  name: "arin",
  roll: 34,
  sec: "A",
};

let updatedValue = {
  ...spreadObj,
  phone: 785,
  email: "abc@gmail.com",
};

console.log(updatedValue);
