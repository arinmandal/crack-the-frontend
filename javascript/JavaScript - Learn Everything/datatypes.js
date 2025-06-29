// Data Types and Type System
// primitive and reference data types in javascript

//? Primitives :string, number, boolean, null, undefined, symbol, bigInt
//? Reference : arrays [], object {}, functions ()

/* //! strings
let hello = 'strings'
//! number
let x = 502
//! boolean
let theek = true
//! null
let selectedStudent = null;
//! undefined
let undif;

//! symbol -> unique immutable value
let u1 = Symbol("uid")
// console.log(u1)
// bigInt

//! bigInt -> biggest number you can hold inside an integer
let abc = 9007199254740991n */

// -------------------------------------------------------------------------------------------------

// Arrays
/* let abc = [1, 2, 3]
let b = abc;
// b.pop()

console.log(abc)
console.log(b)
 */

// Object

/* let obj = {
  name: "DJ",
};

let newObj = obj;
newObj.name = "JavaScript";

console.log(newObj);
 */

//! Dynamic Typing

/* let q = 12;
q = true;
q = "hello"
q = []
console.log(q)

// ? typeof
console.log(typeof q)
 */

// Type coercion -> automatically convert to another one

// string + number = string, In Javascript + operator works (concatenation + addition)

let ans = "51" + 1; //511

// string - number = number, In javascript - operator works only substruction thats why the ans will be 50.
let ans1 = "51" - 1; // 50
// console.log(ans1)

//! Truthy and Falsy

// ? 0, false, "", null, undefined, NaN, document.all these all are false value.

// ? true, non-zero numbers, non-empty-string, objects, functions

// 1 + 0
// true + false = 1

// null + 1 = 1

// 5 + "5" = '55'

// !!undefined = false
// ? typeof NaN === 'number' //true


