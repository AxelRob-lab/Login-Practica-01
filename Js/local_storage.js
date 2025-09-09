const users = JSON.parse(localStorage.getItem('users')) || [];
//JSON= JavaScript Object Notation, organiza los datos con una estructura de javaScript
const tableBody = document.getElementById("user_table");

users.forEach(user => {
    const row = document.createElement("tr")
    row.classList.add('user-row');

    const userCell = document.createElement("td");
    userCell.textContent = user.username;

    const passCell = document.createElement("td");
    passCell.textContent = user.password;

    row.appendChild(userCell);
    row.appendChild(passCell);

    tableBody.appendChild(row);
});