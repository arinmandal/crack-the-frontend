// Searching the DOM
// ! getElementsById()
let heading = document.getElementById("heading");
heading.style.color = "red";

// ! getElementsByClassName(names)
let btn = document.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].style.color = "red";
  btn[i].style.padding = '10px'
  btn[i].style.fontWeight = 'bold'
}

//! querySelectorAll(selectors)
// This method returns a static NodeList of all elements that match a specified CSS selector. Like querySelector(), it uses CSS selectors to find elements.
// This will collect all nodelist like an array of element.

let p = document.querySelectorAll("p");
p[3].style.color = "orange";
// for (let i = 0; i < p.length; i++){
//   p[i].style.color = 'green'
//   p[i].style.backgroundColor = 'yellow'
// }

//! querySelector(selectors):
// This method returns the first element that matches a specified CSS selector.
let button = document.querySelector('button')
button.style.backgroundColor = 'Yellow'