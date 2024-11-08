// auth.js

document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            localStorage.setItem(username, password);
            document.getElementById("registerMessage").innerText = "Registered Successfully!";
        });
    }

    const userLoginForm = document.getElementById("userLoginForm");
    if (userLoginForm) {
        userLoginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("userUsername").value;
            const password = document.getElementById("userPassword").value;
            if (localStorage.getItem(username) === password) {
                sessionStorage.setItem("user", username);
                window.location.href = "user-dashboard.html";
            } else {
                document.getElementById("userLoginMessage").innerText = "Invalid Credentials";
            }
        });
    }

    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("adminUsername").value;
            const password = document.getElementById("adminPassword").value;
            if (username === "admin" && password === "admin123") {
                sessionStorage.setItem("admin", username);
                window.location.href = "admin-dashboard.html";
            } else {
                document.getElementById("adminLoginMessage").innerText = "Invalid Credentials";
            }
        });
    }
});

function placeOrder() {
    alert("Order Placed Successfully!");
}

function acceptOrder() {
    alert("Order Accepted Successfully!");
}

function logout() {
    sessionStorage.clear();
    window.location.href = "home.html";
}
