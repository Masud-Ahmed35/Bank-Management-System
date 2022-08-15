
document.getElementById("btn-submit").addEventListener("click", function () {

    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    if (email === "masud@gmail.com" && password === "password") {
        console.log("Valid User");
    }
    else {
        console.log("Invalid User");
    }

});