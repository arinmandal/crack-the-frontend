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
/* let input = document.querySelector("input");
input.addEventListener("input", e => {
  if (e.data !== null) {
    console.log(e.data);
  }
}); */

// ? Change Events
/* let device = document.querySelector("#device");
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
}); */

//? Input type file
/* let file = document.querySelector("#file");
let upload = document.querySelector("#upload");
upload.addEventListener("click", () => {
  file.click();
});

file.addEventListener("change", dets => {
  let file = dets.target.files[0];
  if (file) {
    upload.textContent = file.name;
  }
}); */

//? Form Validation

/* let form = document.querySelector("form");
let inputs = document.querySelectorAll(".frm-input");

form.addEventListener("submit", e => {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.setAttribute("id", "profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h2 = document.createElement("h2");
  h2.textContent = inputs[1].value;
  let h4 = document.createElement("h4");
  h4.textContent = inputs[2].value;
  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  form.appendChild(card);
  card.appendChild(profile);
  profile.appendChild(img);
  card.appendChild(h2);
  card.appendChild(h4);
  card.appendChild(p);

  inputs.forEach(val => {
    if (val.type !== "submit") {
      val.value = "";
    }
  });
}); */

// ? Mouseover and Mousemove

// let box = document.querySelector(".box");
/* box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "blue";
});
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "chartreuse";
}); */

// ? Mousemove

/* window.addEventListener("mousemove", dets => {
  // console.log(dets.clientX, dets.clientY);
  box.style.top = dets.clientY +'px'
  box.style.left = dets.clientX +'px'
});
 */

// ? Event Bubbling

/* let nav = document.querySelector("#nav");
nav.addEventListener("click", () => {
  alert("Events on nav");
}); */

/* let ul = document.querySelector("ul");
ul.addEventListener("click", dets => {
  // dets.target.style.textDecoration = "line-through";
  dets.target.classList.toggle("lt");
}); */

// ? Event Capturing

/* let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("event on capturing btn");
}); */

// Captcha on it run first
/* a.addEventListener("click", () => {
  console.log("event on a");
}, true);


b.addEventListener("click", () => {
  console.log("event on b");
});
c.addEventListener("click", () => {
  console.log("event on c");
});
 */

// Character count

let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", () => {
  let left = 20 - input.value.length;
  span.textContent = left;
  if (left < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "green";
  }
});
