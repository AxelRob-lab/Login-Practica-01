const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
   
    window.location.href = "html/dashboard.html";
});