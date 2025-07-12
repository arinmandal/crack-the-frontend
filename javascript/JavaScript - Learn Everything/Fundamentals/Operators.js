//! Arithmetic, comparison, assignment, logical,  unary, ternary

// Todo: Arithmetic operator : + Addition, -	Subtraction, *	Multiplication, **	Exponentiation, /	Division ,%	Modulus (Remainder), ++	Increment, --	Decrement

/* let a = 10;
let b = 20;
let sum = a + b;
console.log("Addtion :" + sum);
console.log("Subtraction :" + (10 - 5));
console.log("Multiplication :" + 25 * 3);

// Exponentiation
// x ** y produces the same result as Math.pow(x,y):
let q = 5;
let w = q ** 5; // 5 * 5 * 5* 5
console.log(w);

// Division
console.log("Division : " + 10 / 2);

// %	Modulus (Remainder)
console.log("Remender : " + (16 % 2)); // 0

// increment
let nums = 100;
nums++;
let newNums = nums; // 101
console.log("increment :" + newNums);

// decrement
let xy = 99;
xy--;
let dec = xy;
console.log("Decrement :" + dec); //98 */

//Todo: Comparison operator : Loose Equality (==), Strict Equality (===), Inequality (!=), Strict Inequality (!==), Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=)

/* // Loose Equality
12 == 13; // fasle
12 == "12"; // true beacuse it only check qual or not, not check it is string or not
12 === "12"; // false

// Inequality (!=)

15 != 16; // true

// with strict
// console.log(15 != "15");

//! >=

console.log(17 >= 17); // true beacuse both are same.

//! <=

console.log(48 <= 48); //true */

// Todo: Assignment operator : =, +=, -=, *=, /=, %=

/* let ab = 12;
ab += 5;
console.log("After += :" + ab); //17
ab -= 3;
console.log("After -= :" + ab); // 14
ab *= 2;
console.log("After *= :" + ab); // 28
ab /= 14;
console.log("After /= :" + ab); // 2
ab %= 2;
console.log("After %= :" + ab); // 0
 */

// Todo : Logical operator : &&, ||, !

//? AND && if both condition are true then this will return true.

/* console.log(true && false); // false
console.log(false && false); // false
console.log(true && true); // true
console.log(false && true); // false
 */

//? OR || if one condition is true then this will return true

/* console.log(true || false); //true
console.log(false || false); //false
console.log(false || false); //false
console.log(false || true); //true */

//? NOT !

/* console.log(!true); //false
console.log(!false); //true
console.log(!15); //false
console.log(!!15); //true
 */

// Todo: Unary operator : +, -, !, typeof, ++, --

/* +"15"  //convert into number

+ "hello"; //NaN */
/* 
let x = 15;
console.log(++x); // 16
console.log(x++); // 16
console.log(x); // 17
 */

// Todo: Ternary operator :     condition ? </> : </>

/* let bool = true;
let result = bool ? "nagative" : "Positive";
console.log(result);
 */

// todo : practice question

/* let c = 20;
let v = 10;

if (c > 10 && v < 16) {
  console.log("A");
} else {
  console.log("B");
}
 */

/* let isAdmin = true;
let isLogin = true;
if (isLogin || isAdmin) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}
 */

/* let temp = 40;
if (!(temp > 85)) {
  console.log("Too hot");
} else {
  console.log("Pleasant");
} */

/* let count = 0;

if (count) {
  console.log("truthy");
} else {
  console.log("falsy");
}
 */