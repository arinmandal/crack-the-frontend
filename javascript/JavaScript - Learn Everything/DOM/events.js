// Todo: Events, EventListner

// ? addEventListener, removeEventListener
// let p = document.querySelector("p");
/* p.addEventListener("click", () => {
  p.style.color = "green";
  p.style.fontSize = "2rem";
});
 */

/* function dbl() {
  p.style.color = "yellow";
}
function rmv() {
  console.log("Event remove");
}
p.addEventListener("dblclick", dbl);
p.removeEventListener("dblclick", dbl);
 */

// ? Input Events
let input = document.querySelector("input");
input.addEventListener("input", e => {
  if (e.data !== null) {
    console.log(e.data);
  }
});

// ? Change Events
let device = document.querySelector("#device");
let select = document.querySelector("select");
select.addEventListener("change", e => {
  device.textContent = `Device selected : ${e.target.value}`;
});

let head = document.querySelector(".head");
window.addEventListener("keyup", e => {
  if (e.key == " ") {
    head.textContent = "Space";
  } else {
    head.textContent = e.key;
  }
});
