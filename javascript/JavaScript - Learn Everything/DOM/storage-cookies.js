// Todo: localStorage, sessionStorage, Cookies

// localStorage:
// A browser storage that saves data with no expiration date. Data stays even after closing the browser.

// sessionStorage:
// A browser storage that saves data for one session. Data is cleared when the browser tab is closed.

// Cookies:
// Small pieces of data stored by the browser, often used for tracking and authentication.Cookies can have expiration dates.

// Todo: localStorage
//? store, get data, remove, update

/* // setItem
localStorage.setItem("name", "Arin");

// getItem
let getData = localStorage.getItem("name");

// remove
localStorage.removeItem("name");
 */

// Todo: sessionStorage

// sessionStorage.setItem("name", "Apple");

// Todo: Cookies

// Cookies save data that is automatically sent to the server whenever the browser is reloaded.

// document.cookie = "email=abc@gmail.com";

// ? More about localStorage

/* localStorage.setItem(
  "friend",
  JSON.stringify(["Arin", "Babu", "Gule", "Master", "Bhoitan"]),
); */

// How to store data in localStorage:
// You can only save strings in localStorage.
// If you want to save an array or object, use JSON.stringify() to turn it into a string first.
// Example:
// localStorage.setItem("myArray", JSON.stringify([1, 2, 3]));
// When you need to use the data again, use JSON.parse() to change it back to an array or object.
// Example:
// let myArray = JSON.parse(localStorage.getItem("myArray"));

localStorage.setItem(
  "hola",
  JSON.stringify([
    {
      names: "Pritam",
      age: 26,
    },
    {
      names: "Guddi",
      age: 27,
    },
    {
      names: "Anita",
      age: 63,
    },
    {
      names: "Laltu",
      age: 24,
    },
  ]),
);

let data = JSON.parse(localStorage.getItem("hola"));

data.forEach(element => {
  console.log(element.names);
});
