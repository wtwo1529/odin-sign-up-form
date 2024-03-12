const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const passwordStatusPara = document.querySelector(".password-status");

const createAccountBtn = document.querySelector(".create-account");

password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

const inputEmail = document.querySelector('.email-field');
const inputFirstName = document.querySelector('.firstname-field');
const inputLastName = document.querySelector('.lastname-field');

inputEmail.addEventListener('input', (event) => {
    inputEmail.setAttribute('required', '');
})

const nameRegex = /[0-9\?\!\[\]\{\}\`\\\|\"\'\;\:\/\.\,\(\)\~\@\#\$\%\^\&\*\\\_\=\+\>\<]+/;

function validateFirstName() {
    if (nameRegex.test(inputFirstName.value) == true) {
        inputFirstName.classList.remove("valid");
        inputFirstName.classList.add("invalid");
        return false;
    }
    else {
        inputFirstName.classList.remove("invalid");
        inputFirstName.classList.add("valid");
        return true;
    }
}

function validateLastName() {
    if (nameRegex.test(inputLastName.value) == true) {
        inputLastName.classList.remove("valid");
        inputLastName.classList.add("invalid");
        return false
    }
    else {
        inputLastName.classList.add("valid");
        inputLastName.classList.remove("invalid");
        return true;
    }
}

inputFirstName.addEventListener('input', validateFirstName);
inputLastName.addEventListener('input', validateLastName);

const patternRegex = /[a-zA-Z]*[A-Z]*/ 

function validatePasswords() {
    if (password.value.length <= 12 || confirmPassword.value.length <= 12)
    {
        password.classList.remove("valid");
        password.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        confirmPassword.classList.add("invalid");
        return false;
    }
    if (password.value != confirmPassword.value) {
        password.classList.remove("valid");
        password.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        confirmPassword.classList.add("invalid");
        return false;
    }
    else {
        password.classList.remove("invalid");
        password.classList.add("valid");
        confirmPassword.classList.remove("invalid");
        confirmPassword.classList.add("valid");
        return true;
    }
}

function validateEmail() {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (emailRegex.test(inputEmail.value) == true) {
        inputEmail.classList.remove("invalid");
        inputEmail.classList.add('valid');
        return true;
    }
    inputEmail.classList.remove('valid');
    inputEmail.classList.add('invalid');
    return false;
}

inputEmail.addEventListener('input', validateEmail);

const form = document.querySelector(".form-container"); 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputFirstName.setAttribute('required', '');
    inputLastName.setAttribute('required', '');
    password.setAttribute('required', '');
    confirmPassword.setAttribute('required', '');
    inputEmail.setAttribute('required', '');
    if (validatePasswords() == true && validateFirstName() == true && validateLastName() == true && validateEmail() == true) {
        form.submit();
    }
})