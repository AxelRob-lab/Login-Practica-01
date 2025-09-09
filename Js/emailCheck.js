const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn')
const messageDiv = document.getElementById('message');

function emailIsValid(email){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//expresion regular sirve para manipular textos, la primera parte indica que necesita un @ necesariamente
    return emailPattern.test(email);    
}
//usamos el evento anterior para verificar el email
usernameInput.addEventListener('input', () => {
    const email = usernameInput.value;
    if(!emailIsValid(email)){
        messageDiv.textContent = 'Invalid email format';
        btn.disabled = true;
    }else{
        messageDiv.textContent = 'Email format looks good';
        btn.disabled = false;
    }
});

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
