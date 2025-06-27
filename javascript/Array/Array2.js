// Todo: Array push, pop and slice methods

/* Array push() Method

The arr.push() method is used to push one or more values into the array. This method changes the length of the array by the number of elements added to the array. */
/* 
function arrPush() {
  // original array
  let arr = ["GFG", "ARR", "KGF"];
  // pushing into the arry
  arr.push("ROG");
  console.log(arr);
}
arrPush(); */

/* Array pop() Method
The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array. */

/* function arrPop() {
  // original array
  let arr = ["cream", "ice", "pasta", "sauce"];

  // pop
  arr.pop();
  console.log(arr);
}
arrPop(); */

/* Array slice() Method

The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged. */

/* function func() {
  // Original Array
  var arr = [23, 56, 87, 32, 75, 13];
  // Extracted array
  var new_arr = arr.slice(2, 4);
  console.log(arr);
  console.log("<br>");
  console.log(new_arr);
}
func(); */

//! Array includes() Method

// The array.includes() method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

/* 
let names = ["one", "two", "three", "four"]
console.log(names.includes("four")) */

//! Array sort() Method

/* The arr.sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order. */

/* 
let num = [4, 2, 8, 6, 8, 7, 5, 2];
console.log(num.sort()); // [2,2,4,5,6,7,8,8] */

// let str = ["blue", "green", "ranbow", "Amber", "crimson"];
// console.log(str.sort()) //[("Amber", "blue", "crimson", "green", "ranbow")];


//! Array split and join method

/* split Method
The split method splits a string into an array of substrings based on a specified separator. */

//? Split Method
// The split method splits a string into an array of substrings based on a specified separator.
// split() splits a string into an array of substrings, and returns the array:
// Syntax:
// str.split(separator, limit)

/* let str = 'hello god plans'
console.log(str.split(" ")) //[ 'hello', 'god', 'plans' ]
 */


// ? Array Join()
/* The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified.The default is comma(,). */


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(",");
// console.log(text)