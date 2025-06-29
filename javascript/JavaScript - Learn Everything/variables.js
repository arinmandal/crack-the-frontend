//? var let const
//? declarations and initialization
//? Reassignment, redeclaration

// var a; //declare
// var a = 12; //declare and initialize
// window mein add hot hai
// function scoped hota hai
// firse declar kar sakta ho same name se and error nahi aayega.
// var a = 14;
// let name = "abcd";
// name = "rahul";
// Can be reassigned but not redeclared
// const discount = 10;
// Cannot be reassigned or redeclared
// Value must be assigned at declaration

//? global, block, function scopes

/* var one = 1;
{
  console.log("This output from block scope var " + one);
  var two = 20;
  let three = 3;
  const four = 4;
} */

/* console.log(two); // 20 accesable outside the scope
console.log(three); // ReferenceError
console.log(four); // ReferenceError */

//? Temporal Dead Zone

//console.log(x); //Cannot access 'x' before initialization
/* 
This place is called the Temporal Dead Zone.
*/
// let x = 12;

//? Hoisting impart per type

//console.log(b); // undefined
// var b = 10;
// console.log(b)

// console.log(x);
// let x = 20;

// console.log(y);
/* let y = 40;

var a = "ast";
function hell() {
  return a;
}

console.log(hell());
 */