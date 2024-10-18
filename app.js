// Elementos del DOM
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const homeContainer = document.getElementById('home-container');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');

// Mostrar formulario de registro
showRegisterLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Mostrar formulario de login
showLoginLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Manejo del login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de login básico (sin validación real)
    if (email && password) {
        alert(`Bienvenido ${email}`);
        loginContainer.style.display = 'none';
        homeContainer.style.display = 'flex';
    } else {
        alert('Por favor ingrese usuario y contraseña');
    }
});

// Manejo del registro
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert(`Usuario ${username} registrado correctamente`);
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    } else {
        alert('Las contraseñas no coinciden');
    }
});

// Función para alternar el sidebar (colapsar/expandir)
toggleBtn.addEventListener('click', function() {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
    toggleBtn.classList.toggle('collapsed');
    toggleBtn.textContent = isCollapsed ? '⮞' : '⮜';
});