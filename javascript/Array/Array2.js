// Todo: Array push, pop and slice methods

/* Array push() Method

The arr.push() method is used to push one or more values into the array. This method changes the length of the array by the number of elements added to the array. */

function arrPush() {
  // original array
  let arr = ["GFG", "ARR", "KGF"];
  // pushing into the arry
  arr.push("ROG");
  console.log(arr);
}
arrPush();

/* Array pop() Method
The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array. */

function arrPop() {
  // original array
  let arr = ["cream", "ice", "pasta", "sauce"];

  // pop
  arr.pop();
  console.log(arr);
}
arrPop();

/* Array slice() Method

The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged. */

function func() {
  // Original Array
  var arr = [23, 56, 87, 32, 75, 13];
  // Extracted array
  var new_arr = arr.slice(2, 4);
  console.log(arr);
  console.log("<br>");
  console.log(new_arr);
}
func();
