const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
const messageDiv = document.getElementById('message');

messageDiv.setAttribute('role','alert');
messageDiv.setAttribute('aria-live','assertive');

function emailIsValid(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);    
}

function validatePassword(password){
    // Al menos 5 caracteres y una mayúscula
    const hasMinLength = password.length >= 5;
    const hasUppercase = /[A-Z]/.test(password);
    return hasMinLength && hasUppercase;
}

function showMessage(text, type='info') {
    messageDiv.textContent = text;
    messageDiv.className = type;
}

usernameInput.addEventListener('input', () => {
    const email = usernameInput.value;
    if(!emailIsValid(email)){
        showMessage('Invalid email format', 'error');
        btn.disabled = true;
    }else{
        showMessage('Email format looks good', 'success');
        btn.disabled = false;
    }
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (!validatePassword(password)) {
        showMessage('Password must be at least 5 characters and contain at least one uppercase letter.', 'error');
        btn.disabled=true;
    } else {
        showMessage('Password is valid.', 'success');
        btn.disabled = false;
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validar email y contraseña antes de continuar
    if (!emailIsValid(username)) {
        showMessage('Invalid email format', 'error');
        btn.disabled = true;
        return;
    }
    if (!validatePassword(password)) {
        showMessage('Password must be at least 5 characters and contain at least one uppercase letter.', 'error');
        btn.disabled = true;
        return;
    }

    if (username !== '' && password !== '') {
        // Guardar usuario en localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));

        showMessage('Login successful!', 'success');
        window.location.href = "html/dashboard.html";
    } else {
        showMessage('Login failed. Please try again', 'error');
    }
});