const emailField = document.querySelector("[name=email]");
const passwordField = document.querySelector("[name=password]");

const setErrors = (field, isError=true) => {
    if (isError) {
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = `${field.name} es un campo requerido`;
    } else {
        field.classList.add("valid");
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const validateFieldRequired = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
}

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (fieldValue.trim().length > 5 && !emailRegex.test(fieldValue)) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
}

// validacion email
emailField.addEventListener("input",validateEmailFormat );
emailField.addEventListener("blur", validateFieldRequired);

//Validacion contraseña
passwordField.addEventListener("blur", validateFieldRequired);

// VALIDACION FRONT

//● Login de usuarios 

// ○ Email
// ■ Obligatorio.
// ■ Deberá ser válido.
// ■ (Opcional) → Debe existir en la base.

// ○ Contraseña
// ■ Obligatoria.