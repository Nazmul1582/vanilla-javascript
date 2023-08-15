// hold html element
const btnSubmit = document.getElementById("btn-submit");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

// login function
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  if (email === "nazmul@gmail.com" && password === "1234") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User! Give your correct information!");
  }
});
