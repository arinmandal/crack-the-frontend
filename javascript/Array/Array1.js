//! Creating an Array

let studentsName = ["Praksh", "Via", "Atanu", "Ronit", "Rihan"];
// console.log(studentsName);

//! Adding Different Types of Data
let mixedArray = ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }];
// console.log(mixedArray);
// Output: ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }]

// ! Accessing Array Elements

// console.log(studentsName[3]); //Ronit
// console.log(mixedArray[3]); //{ schoolName: "SIES" }

//! Iterating Over Arrays
// ? Using for loops

/* for (let name of studentsName) {
  console.log(name);
} */

//? Using a For-In Loop
// The for-in loop iterates over the indices of the array:

/* for (let index in mixedArray) {
  console.log(mixedArray[index]);
} */

/* Modifying Arrays
Adding Elements
You can add elements to an array using the push method:   */

// studentsName.push("Anita");
//console.log(studentsName); //[ 'Praksh', 'Via', 'Atanu', 'Ronit', 'Rihan', 'Anita' ]

// ! Removing Elements
// To remove elements, you can use methods like pop, shift, and splice:

// studentsName.pop(); // Removes the last element
// console.log(studentsName);
// Output: [ 'Praksh', 'Via', 'Atanu', 'Ronit', 'Rihan' ]

// studentsName.shift(); // Removes the first element
// console.log(studentsName);
// Output: [ 'Via', 'Atanu', 'Ronit', 'Rihan' ]

// studentsName.splice(1, 1); // Removes one element at index 1
// console.log(studentsName);
// Output: [ 'Via', 'Ronit', 'Rihan' ]

//! Array Methods
// JavaScript provides various array methods to manipulate data:

/* map
Creates a new array with the results of calling a function for every array element: */

let upperCaseNames = studentsName.map(name => name.toUpperCase());
// console.log(upperCaseNames) [ 'PRAKSH', 'VIA', 'ATANU', 'RONIT', 'RIHAN' ]

/* filter
Creates a new array with elements that pass a test provided by a function:
 */

let filterName = studentsName.filter(name => name.length < 4);
// console.log(filterName) [ 'Via' ]

/* 
Using Reduce
It is used to reduce the array into one single value using some functional logic */

/* array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc, curr) => acc + curr;
sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum); */
