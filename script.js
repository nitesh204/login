var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function logIn() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function validateLogin() {
    var userId = document.querySelector("#login input[type='text']").value;
    var password = document.querySelector("#login input[type='password']").value;

    if (userId === "userid" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

function validateregister() {
    var email = document.querySelector("#register input[type='email']").value;
    var password = document.querySelector("#register input[type='password']").value;
    var userId = document.querySelector("#register input[type='text']").value;

    if (email === "email@gmail.com" && userId === "userid" && password === "password") {
        alert("Registration successful! Please continue with Login");
    } else {
        alert("Registration failed. Please check your credentials.");
    }
    return false;
}

function togglePassword(id, buttonId) {
    var passwordField = document.getElementById(id);
    var button = document.getElementById(buttonId);

    // Toggle password visibility
    if (passwordField.type === "password") {
        passwordField.type = "text";
        button.classList.add('eye-visible'); // Add the eye-visible class for the animation
    } else {
        passwordField.type = "password";
        button.classList.remove('eye-visible'); // Remove the eye-visible class for the animation
    }
}
