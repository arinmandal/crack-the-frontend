// todo: if - else, else-if, switch-case, early return pattern

// ? if - else
/* if (65 > 10) {
  console.log(false);
} else {
  console.log(true);
}
 */

// ? else - if
/* let currentHour = 14; // 14 represents 2 PM (24-hour format)
if (currentHour < 12) {
  console.log("Good morning!");
} else if (currentHour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
} */

//? switch - case

/* let day = 1;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Unknown day";
}

console.log(dayName); */

//? Early return pattern

/* function getResult(num) {
  if (num < 25) return "fail";
  else if (num < 50) return "c";
  else if (num < 75) return "b";
  else return "a";
}

console.log(getResult(90));
 */
