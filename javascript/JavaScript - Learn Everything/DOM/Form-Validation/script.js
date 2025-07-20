let names = document.querySelector("#name");
let form = document.querySelector("form");
let hide = document.querySelector("#hide");

form.addEventListener("submit", e => {
  e.preventDefault();
  /* if (names.value.length <= 2) {
    hide.style.display = "initial";
  } else {
    console.log(names.value);
  } */

  const regex = /^[a-zA-Z0-9._]{3,20}$/;
  let ans = regex.test("arin_@2025");
  console.log(ans);
});
