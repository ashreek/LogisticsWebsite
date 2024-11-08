// app.js

// Hardcoded credentials for demo
const adminCredentials_admin1 = { username: "admin", password: "admin123" };
const adminCredentials_admin2={username:"ash",password:"ash123"};

// Check if user/admin is logged in
function checkLogin() {
    const user = localStorage.getItem("user");
    if (!user && window.location.pathname.includes("service.html")) {
        alert("Please log in to access the service page.");
        window.location.href = "user-login.html";
    }
}

// Display Navbar
function setupNavbar() {
    document.getElementById("navbar").innerHTML = `
        <nav style="padding: 10px; background-color: #333; color: white; text-align: center;">
            <a href="home.html" style="margin: 0 15px; color: white;">Home</a>
            <a href="service.html" style="margin: 0 15px; color: white;">Service</a>
            <a href="user-dashboard.html" style="margin: 0 15px; color: white;">User Dashboard</a>
            <a href="admin-dashboard.html" style="margin: 0 15px; color: white;">Admin Dashboard</a>
            <a href="contact.html" style="margin: 0 15px; color: white;">Contact</a>
            <a href="admin-login.html" style="margin: 0 15px; color: white;">AdminLogin</a>
            ${localStorage.getItem("user") ? `<a href="#" onclick="logout()">Logout</a>` : `<a href="user-login.html">Login</a>`}
        </nav>
    `;
}

// Login and Registration
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        localStorage.setItem("user", username);
        window.location.href = "user-dashboard.html";
    } else {
        alert("Invalid login.");
    }
}

// Admin Login
function loginAdmin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    if ((username === adminCredentials_admin1.username && password === adminCredentials_admin1.password) || (username === adminCredentials_admin2.username && password === adminCredentials_admin2.password)) {
        localStorage.setItem("admin", username);
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Invalid admin credentials.");
        console.log("invaloid");
    }
}

// Order Placement
function placeOrder() {
    const orderFrom = document.getElementById("orderFrom").value;
    const orderTo = document.getElementById("orderTo").value;
    const orderDate = document.getElementById("orderDate").value;
    const description = document.getElementById("description").value;

    if (orderFrom && orderTo && orderDate && description) {
        alert(`Order placed:\nFrom: ${orderFrom}\nTo: ${orderTo}\nDate: ${orderDate}\nDescription: ${description}`);
        window.location.href = "user-dashboard.html";
    } else {
        alert("Please fill all order details.");
    }
}

// Logout
function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    alert("Logged out successfully.");
    window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", function () {
    setupNavbar();
    checkLogin();
});
