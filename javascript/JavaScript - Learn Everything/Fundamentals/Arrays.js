//! Todo: Arrays

// Todo: Create, Access, Modify arrys

// ? Create

let arr = [1, 2, 2, 4, 5];

// ? Access
// arr[4] -> 5

// ? Modify

/* arr[2] = 3;
console.log(arr); // [1, 2, 3, 4, 5] */

// Todo: Array methods : push, pop, shift, unshift, splice, slice, reverse, sort

// ? Push
/* arr.push(6);
console.log("After push", arr); */

// ? Pop
/* arr.pop();
console.log("After pop", arr); */

// ? shift
/* arr.shift();
console.log("After shift", arr); */

// ? unshift
/* arr.unshift(0);
console.log("After unshift", arr); */

// ? splice -> it change existing array value
/* console.log(arr)
arr.splice(1, 3);
console.log("After splice", arr);
 */

// ? slice -> it create new array with modified value
/* console.log(arr);
let sl = arr.slice(1, 3);
console.log("After slice", sl);
 */

// ? reverse
/* console.log(arr);
arr.reverse();
console.log("After reverse", arr); */

// ? sort
/* console.log(arr);
arr.sort();
console.log("After sort", arr); */

// Todo: Iteration Methods : forEach, map, filter, reduce, find, some

// ? forEach -> its work on existing array return nothing, but modify existing array elements.
/* arr.forEach(function (val) {
  console.log(val + 5);
});
 */

// ? map -> when you have to create new array in the basis of existing array.

// let newArray = arr.map(val => {
//   return 10;
// });

// console.log(newArray); [10, 10, 10, 10]

//? () for without return keyword.
/* let newArray = arr.map(val => 5);
console.log(newArray);
 */

// ? check condition with map
/* let newArray = arr.map(elm => {
  if (elm > 10) return elm;
})

console.log(newArray) // [undefined, undefined, undefined, undefined, undefined] */

/* let nums = [40, 34, 85, 75, 136];

let newNums = nums.map(elm => {
  if (elm > 50) return elm;
});

console.log(newNums); //[undefined, undefined, 85, 75, 136]
 */

// ? filter

/* let newArr = arr.filter(elm => {
  if (elm > 4) return true;
});

console.log(newArr); //[5] */

/* let arx = [22, 39, 48, 52, 36];

let newArr = arx.filter(elm => {
  if (elm > 30) return true;
});
console.log(arx);
console.log(newArr);
[39, 48, 52, 36]; */

// ? reduce
/* 
let reduceNum = arr.reduce((accumulator, val) => {
   return accumulator + val
}, 0);

console.log(reduceNum) //14 */

// ? find

/* let findNew = arr.find(elm => {
  return elm === 2;
});
console.log(findNew);
 */

// ? some -> returns true, false

/* let someElm = [45, 55, 78, 85, 100, 99];

let any = someElm.some(elm => {
  return elm > 85;
});

console.log(any);
 */

// ? every

/* let ev = arr.every((elm) => {
  return elm > 2;
})

console.log(ev); false */

// Todo: Destructuring & Spread Operator

// ? Destructuring

let nums = [10, 20, 30, 40, 50];
// let [a, b, , c] = nums;
// console.log(a, b, c); // 10, 20, 40

// ? Spread Operator

/* let newNums = [...nums, 60, 70, 80];
console.log("before spread", nums);
console.log("after spread", newNums); //[10, 20, 30, 40, 50, 60, 70, 80] */

// ! Question 1: Create an array of student names and print each
/* let students = ["ronit", "rohit", "rahul", "rinki", "rihan", "ratul"];

students.forEach(students => {
  console.log(students);
}); */

// ! Question 2: Filter even numbers from an array

// let evenNum = [1, 2, 4, 3, 16, 8, 32, 10];

// let checkEven = evenNum.filter(elm => {
//   if (elm % 2 === 0) return elm;
// });

// console.log(checkEven);

// ! Question 3: Map prices to include GST (18%)

/* let productPrice = [20, 13, 118, 100, 10];

let afterGST = productPrice.map(value => value + (value * 18) / 100);

console.log("Product price after GST:", afterGST);
 */

// ! Question 4: Reduce salaries to calculate total payroll

// let salaries = [2000, 40400, 70000, 8000, 40000, 10000];

// let totalPayroll = salaries.reduce((accumulator, currentSalaries) => {
//   return accumulator + currentSalaries;
// }, 0);

// console.log("Total Payroll:", totalPayroll);

// ! Question 5: Find the first student with grade A

// let students = [
//   { name: "John", grade: "B" },
//   { name: "Sara", grade: "C" },
//   { name: "Mike", grade: "A" },
//   { name: "Emma", grade: "A" },
// ];

// let firstAStudent = students.find(student => student.grade === "A");

// console.log("First student with grade A:", firstAStudent);

// ! Question 6: Write a function to reverse an array

/* function reverseArr(arr) {
  return arr.reverse();
}

let arrs = [10, 15, 20, 22, 23, 45];
console.log(reverseArr(arrs));
 */

// ! Question 7: Sort array of ages in ascending order

/* let ages = [10, 85, 78, 20, 25, 27, 18];
console.log("before sort:", ages);
let arrange = ages.sort();
console.log("after sort", arrange);
 */

// ! Question 8: Add "Mango" at the end and "Pineapple" at the beginning of this array

let fruits = ["Apple", "Banana"];
// fruits.unshift("Mango");
// console.log(fruits);
// //["Mango", "Apple", "Banana"];

// fruits.push("Pineapple");
// console.log(fruits); //["Mango", "Apple", "Banana", "Pineapple"];

// ! Question 10: Replace "Banana" with "Kiwi" in the array above.
/* fruits.pop();
fruits.push("kiwi");
console.log(fruits)
 */

// ! Question 11: Insert "Red" and "Blue" at index 1 in this array

/* let colors = ["Crimson", "Green"];
colors.splice(1, 0, "Red", "Blue");

console.log(colors); */

// ! Question 12: Extract only  the middle 3 elements from this array

// let items = [1, 2, 3, 4, 5, 6];
// let newarr = items.slice(1, 4);
// console.log(news)

// ! Question 13: Sort this array alphabetically and then reverse it.

/* let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();

console.log(names); */
