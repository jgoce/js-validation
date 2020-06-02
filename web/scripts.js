const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form-page");
const errors = document.getElementById("error-form");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (username.value === "" || username.value == null) {
    messages.push("Username is required");
  }

  if (password.value.length <= 6) {
    messages.push("password has to be longer than 6 characters");
  }

  if (password.value === "password") {
    messages.push(" the password can not be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errors.innerText = messages.join("\n ");
  }
});
