//! document.getElementById, document.getElementsByClassName, document.querySelector, document.querySelectorAll

// Todo: Accessing Elements in the DOM
// ? document.getElementById

/* let abc = document.getElementById("abc");
console.dir(abc); */

// ? document.getElementsByClassName

/* let abc = document.getElementsByClassName("abc");
console.log(abc);
 */

//? document.querySelector

/* let abc = document.querySelector("h1");
console.log(abc);
 */
//? document.querySelectorAll

/* let abc = document.querySelectorAll("h1");
console.log(abc); */

// Todo: DOM content Manipulation

let h1 = document.querySelector("h1");

// ? textContent
// h1.textContent = "Hello DOM";

//? change HTML
/* h1.innerHTML = "<strong>Hello World!</strong>";
console.dir(h1); */

// Todo: Attribute Manipulation
// let a = document.querySelector("a");
// a.href = "https://www.google.com";

// setAttribute
/* a.setAttribute("href", "https://www.google.com");
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
); */

//? getAttribute
// console.log(a.getAttribute("href"));

// ? removeAttribute
// img.removeAttribute("src");

// Todo: Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend
/* let h2 = document.createElement("h2");
h2.textContent = "Dynamic DOM";
document.querySelector("body").appendChild(h2);
document.querySelector("body").prepend(h2); */

// ? Style Changes
// h2.style.color = "crimson";
// h2.style.fontFamily = "Inter";
// h2.classList.add("elm");

