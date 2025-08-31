const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn')
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
const username= usernameInput.value.trim();
const password = passwordInput.value.trim();

if (username !== '' && password !== '') {
    messageDiv.textContent = 'Login successful!';
    window.location.href = "html/dashboard.html";
}else{
    messageDiv.textContent='Login failed. Please try again'
}
});
