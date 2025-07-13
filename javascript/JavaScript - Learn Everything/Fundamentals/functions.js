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

/* function a() {
  let a = 12;
  function b() {
    let b = 13;
    console.log("a inside b", a);
    console.log("c inside b", c);

    function c() {
      let c = 18;
      console.log("a inside c", a);
    }
    c();
  }
  b();
}
a();
 */

// ? IIFE (Immediately Invoked Function Expressions)

/* (function () {
  console.log("IIFE called");
})(); */

// ? Hoisting

/* hey()

function hey() {
  console.log('Hello')
} */

// Todo:  convert to arrow function

/* function multiply(a, b) {
  return a * b;
}

let multiply = (a, b) => {
  return a * b
} */

// Todo: identify parameter and arguments

/* // name is a parameter
function welcome(name) {
  console.log(name);
}

// React is an arguments
welcome("React");
 */

// Todo: guess the answers
/* function sayHi(name = "Guest") {
  console.log("Hi", name);
}
sayHi(); */

// Ans - Hi Guest beacuse default parameter set to Guest

// Todo: what does the ... operator mean in parameters?

/* function abcd(...val) {
  // return array [1, 2, 3, 4, 5, 6]
  console.log(val);
}

abcd(1, 2, 3, 4, 5, 6); */

// Todo: Use rest parameter to accept any number of scores and return the total.

/* function scores(...scores) {
  let total = 0;
  scores.forEach(score => {
    total += score;
    
  })
  return total
}

console.log(scores(10, 45, 14, 2, 5))
 */

// Todo: fix the function using early return

/* function checkAge(age) {
  if (age < 18) {
    console.log("Too young");
  } else {
    console.log("Allowed");
  }
} */
/* function checkAge(age) {
  if (age < 18) return "Too young";
  return "Allowed";
}

console.log(checkAge(25));
 */

// Todo : whats the return value
/* function f() {
  return; 
}

ans - undefined */

// Todo: Assign a function to a variable and then call it

/* let yes = function() {
  console.log("Yes");
};

yes();
 */

// Todo: Pass a function into another function and execute it inside.

/* function pass(another) {
  another();
}

pass(function () {
  console.log("Another function");
});
 */

// Todo: Convert impure to pure function

// // impure
// let total = 0;
// function impure(num) {
//   total += num;
// }

// // pure
// let total = 0;
// function impure(num) {
//   let newTotal = total;
//   newTotal += num;
// }

// Todo: Convert this normal function into an IIFE;

// function init() {
//   console.log("Function init");
// }

// (function init() {
//   console.log("Function init");
// })();

// Todo: Discount calculator using HOF(Higher order functions)

/* function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalculator(10);
console.log(`After discount: ${ten(1000)}`);
let fifty = discountCalculator(50);
console.log(`After discount: ${fifty(1000)}`); */
