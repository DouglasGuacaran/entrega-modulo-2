
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Valores hardcodeados para la demostración
    let correctEmail = 'usuariodemo@gmail.com';
    let correctPassword = '12345';
    
    // Verifica si los datos ingresados coinciden con los valores preestablecidos
    if(email === correctEmail && password === correctPassword) {
        alert('Autenticación exitosa');
        window.location.href = 'deposit.html';
    } else {
        alert('Autenticación fallida');
    }
}
$(document).ready(function() {
    // Al hacer clic en una pestaña, activarla y mostrar el contenido correspondiente
    $('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let tabId = $(this).attr('href');
    $('.tab-pane').removeClass('show active');
    $(tabId).addClass('show active');
    });
});

document.getElementById('loginBtn').addEventListener('click', login);