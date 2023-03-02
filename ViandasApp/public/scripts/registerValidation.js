const nameField = document.querySelector("[name=fullName]");
const emailField = document.querySelector("[name=email]");
const birthDate = document.querySelector("[name=birthDate]");
const phoneField = document.querySelector("[name=mobilePhone]");
const avatarField = document.querySelector("[name=avatar]");
const passwordField = document.querySelector("[name=password]");
const confirmPasswordField = document.querySelector("[name=confirmPassword]");


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



// Validacion de Nombre y Apellido
nameField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 2) {
        field.nextElementSibling.classList.add("error");
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = "Debes escribir tu Nombre y Apellido";
    } else {
        field.classList.remove("invalid");
        field.classList.add("valid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});


// Validacion de Numero de telefono
phoneField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 2) {
        field.nextElementSibling.classList.add("error");
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = "Debes escribir un Telefono";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.classList.remove("invalid");
        field.classList.add("valid");
        field.nextElementSibling.innerText = "";
    }
});

birthDate.addEventListener("blur", function(e){
   const field = e.target;
    const fieldValue = e.target.value;
    if ( fieldValue === '') {
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir una fecha";
    } else {
        field.classList.remove("invalid");
        field.classList.add("valid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});




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

//Validacion de Email
//Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// validacion email
emailField.addEventListener("input",validateEmailFormat );
emailField.addEventListener("blur", validateFieldRequired);

//Validacion contraseña
passwordField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 7) {
        field.nextElementSibling.classList.add("error");
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = "Debes tener al menos 8 caracteres";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        field.classList.remove("invalid");
        field.classList.add("valid");
    }
});

//Validacion contraseña
confirmPasswordField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 7) {
        field.nextElementSibling.classList.add("error");
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = "Debes tener al menos 8 caracteres";
    } else if (fieldValue !== passwordField.value) {
        field.nextElementSibling.classList.add("error");
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = "Las contraseñas no coinciden";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        field.classList.remove("invalid");
        field.classList.add("valid");
    }
});


//Validacion Imagen

//Campo completo
avatarField.addEventListener("blur", function(e){
    const field = e.target;
     const fieldValue = e.target.value;
     if ( fieldValue === '') {
         field.nextElementSibling.classList.add("error");
         field.nextElementSibling.innerText = "Debes subir una imágen";
         field.classList.add("invalid");
         field.classList.remove("valid");
     } else {
         field.nextElementSibling.classList.remove("error");
         field.nextElementSibling.innerText = "";
     }
 });
 
//Tipo de archivos
avatarField.addEventListener("change", function(e){
    const field = e.target;
    const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExtension)) {
        field.nextElementSibling.classList.add("error");        
        field.classList.add("invalid");
        field.classList.remove("valid");
        field.nextElementSibling.innerText = `Las extensiones permitidas son ${allowedExt.join(", ")}`;
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        field.classList.remove("invalid");
        field.classList.add("valid");
    }
  });


        // 4. Validaciones del front-end
        // ● Registro de usuarios
        // ○ Nombre y apellido
        // ■ Obligatorio.
        // ■ Deberá tener al menos 2 caracteres.
        // ○ Email
        // ■ Obligatorio.
        // ■ Deberá ser válido.
        // ■ (Opcional) → No puede repetirse con los e-mails ya registrados.
        // ○ Contraseña
        // ■ Obligatoria.
        // ■ Deberá tener al menos 8 caracteres.
        // ■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.
        // ○ Imagen
        // ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

