//! LOOPS
// Todo: for, while, do-while,

// ? for (start, end, change)

/* for (let i = 1; i <= 100; i++) {
  console.log(i);
} */

// ? While
// start
// while (end) {
//   // change
// }

/* let i = 1;
while (i < 33) {
  i++;
  console.log("Loop end!");
} */

// ? Do While
// No matter what do will run one time then it will check condition.
/* let i = 1;
do {
  console.log(i);
  i++, console.log("Now i is:", i);
} while (i < 0);
 */

//? break, continue

/* for (let i = 1; i < 201; i++) {
  console.log(i);
  // this loop is iterate for 21 times.
  if (i === 21) {
    break;
  }
  
} */

/* for (let i = 1; i < 100; i++) {
  // this loop is print every single number of this loop ecept 21
  if (i === 21) {
    continue;
  }
  console.log(i);
}
 */

// Todo:Q1 - Print numbers from 1 to 10 using for loop

/* for (let i = 1; i < 11; i++){
  console.log(i)
} */

// Todo:Q2 - Print numbers from 10 to 1 using for while loop

/* let i = 10;
while (i >0) {
  i--;
  console.log(i);
} */

// Todo:Q3 - Print even numbers from 1 to 20 using for while loop

/* for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
 */
// Todo:Q4 - Print odd numbers from 1 to 15 using for while loop

/* let i = 1;
while (i < 15) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
} */

// Todo:Q5 - Print the multiplication table of 5.

/* for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i} `);
} */

// Todo:Q6 - Find the sum of numbers from 1 to 100 using a loop.
/* let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum); */

// Todo:Q7 - Print all numbers between 1 to 50 that are divisible by 3;

/* for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
 */
// Todo:Q8 - Ask the user for a number and print whether each number form 1 to that number us even or odd;

/* let num = Number(prompt("Enter a number"));
for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is Odd`);
  }
}
 */
// Todo:Q9 - Count how many numbers between 1 to 100 are divisible by both 3 and 5;

/* for (let i = 0; i < 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
 */
