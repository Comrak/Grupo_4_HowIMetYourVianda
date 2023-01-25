const emailField = document.querySelector("[name=email]");
const passwordField = document.querySelector("[name=password]");


//Validacion de Email
//Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
emailField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       
    if (fieldValue.length <= 2 && (!reEmail.test(emailField.value))) { 
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir un email valido";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

//Validacion contraseña
passwordField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length === 0) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingrese su contraseña";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

// VALIDACION FRONT

//● Login de usuarios 

// ○ Email
// ■ Obligatorio.
// ■ Deberá ser válido.
// ■ (Opcional) → Debe existir en la base.

// ○ Contraseña
// ■ Obligatoria.