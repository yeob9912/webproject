document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const header = document.querySelector(".header");

  const loginButton = loginForm.querySelector("button");

  // Handle "Sign UP" link click
  const signUpLink = document.querySelector("#login-form a");
  signUpLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    header.textContent = "Signup Here";
    loginButton.textContent = "Next";  // ✅ Change text to Next when signup is active
  });

  // Handle "Login" link click
  const loginLink = document.querySelector("#signup-form a");
  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    header.textContent = "Login Here";
    loginButton.textContent = "Login";  // ✅ Change text back to Login
  });

  // Handle signup form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Signed up successfully!");
    signupForm.reset();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    header.textContent = "Login Here";
    loginButton.textContent = "Login";  // reset button text just in case
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "https://www.google.com";
  });
});
