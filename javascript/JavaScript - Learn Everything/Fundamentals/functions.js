//! Functions

// ? Function declaration
/* function hello() {
  console.log("Hello");
}
hello() */

//? Function expression

/* let fnc = function () {
  console.log("Function expression");
};
fnc();
 */

// ? Arrow Functions

/* let arrow = () => {
  console.log('Arrow Functions')
}
arrow(); */

// ? Parameter, argument

/* // a , b Parameter
const add = (a, b) => {
  console.log(a + b);
};

// argument, acctual value
add(5, 8);
 */

//? Default, rest and spread parameters

// Default Parameter
/* function greet(name = "Rahul") {
  console.log(`Hello ${name}!`);
}
greet('Richard'); */

// ? rest

/* function restValue(rest) {
  console.log(rest);
}

restValue(1, 2, 3, 4, 5, 6, 7, 8);
 */

// ? First class functions -> First-class functions mean that functions are treated like any other value in the language.

/* const first = val => {
  val();
};

first(function () {
  console.log("Hello from call");
});
 */

// ? Higher order functions -> Higher-order functions are functions that either take one or more functions as arguments, return a function, or both.

/* function higher() {
  return () => {
    console.log("Hello from inner function");
  };
}

higher()();
 */

// ? Pure vs Impure function

// Pure

/* function sayHello() {
  console.log("Say Hello");
}

sayHello(); //This function doesn't effect outside element. */

// Impure

/* let count = 0;

function increaseCount() {
  count += 1;
  console.log(count);
}

increaseCount(); */

//? Closures -> A closure happens when a function "remembers" variables from its outer scope, even after that outer function has finished executing.

/* function abcd() {
  let a = 10;

  return function () {
    a += 1;
    console.log(a);
  };
}

abcd()();
 */

// ? Lexical scoping
