'use srict';
// <    >   =>

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        const errorInputs = () => {
            email.style.border = '1px solid red';
            password.style.border = '1px solid red';
        };

        // Validación de expresiones regulares
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        function isValidPassword(password) {
            const passwordRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return passwordRegex.test(password);
        };

        // Validamos los campos
        if(!email.value.trim() === '') {
            emailError.textContent = 'Please enter a valid email address';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email';
        } else {
            email.style.border = '';
            emailError.textContent = '';
        };

        if(!password.value.trim() === '') {
            passwordError.textContent = 'Enter and user';
            errorInputs();
            isValid = false;
        } else if(!isValidPassword(password.value.trim())) {
            passwordError.textContent = 'Invalid password';
            errorInputs();
        } else {
            password.style.border = '';
            passwordError.textContent = '';
        };

        const resetError = () => {
            email.style.border = '';
            emailError.style.border = '';
            password.style.border = '';
            passwordError.style.border = '';
        };

        email.addEventListener('change', resetError);
        password.addEventListener('change', resetError);

        if(isValid) {
            form.submit();
        };
    });

    [email, password].forEach(input => {
        input.addEventListener('input', () => {
            document.getElementById(input.id + 'Error').textContent = '';
        });
    });

});