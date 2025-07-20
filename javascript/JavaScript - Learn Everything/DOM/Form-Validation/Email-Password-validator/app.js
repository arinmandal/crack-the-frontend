let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector(".btn");
let message = document.querySelector(".message");

form.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#validMail").textContent = "";
  document.querySelector("#validPass").textContent = "";

  let emailRegex = /^\S+@\S+\.\S+$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  let checkMail = emailRegex.test(email.value);
  let checkPass = passwordRegex.test(password.value);
  let isValid = true;

  if (!checkMail) {
    document.querySelector("#validMail").textContent = "Email is incorrect";
    document.querySelector("#validMail").style.display = "initial";
    isValid = false;
  }
  if (!checkPass) {
    document.querySelector("#validPass").textContent = "Password is incorrect";
    document.querySelector("#validPass").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    message.textContent = "Form Submitted!";
  }
});
