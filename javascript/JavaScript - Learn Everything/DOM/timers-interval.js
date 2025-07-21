// -------------------------
// One-time Timer using setTimeout
// -------------------------

// Runs the callback once after 2 seconds
/* const timeoutId = setTimeout(() => {
  alert("Hello after 2 seconds");
}, 2000);
 */
// To cancel the above timeout
// clearTimeout(timeoutId);

// -------------------------
// Repeated Timer using setInterval
// -------------------------

// Runs the callback every 5 seconds
/* const intervalId = setInterval(() => {
  console.log("setInterval executed");
}, 5000);
 */
// To cancel the interval
// clearInterval(intervalId);

// -------------------------
// Countdown Example (10 to 0) using setInterval
// -------------------------

/* let count = 10;

const countdown = setInterval(() => {
  if (count >= 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(countdown); // Stop when count is less than 0
  }
}, 1000);
 */