const nameField = document.querySelector("[name=fullName]");
const emailField = document.querySelector("[name=email]");
const birthDate = document.querySelector("[name=birthDate]");
const phoneField = document.querySelector("[name=mobilePhone]");
const avatarField = document.querySelector("[name=avatar]");
const passwordField = document.querySelector("[name=password]");
const confirmPasswordField = document.querySelector("[name=confirmPassword]");


// Validacion de Nombre y Apellido
nameField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 2) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir tu Nombre y Apellido";
    } else {
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
        field.nextElementSibling.innerText = "Debes escribir un Telefono";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

birthDate.addEventListener("blur", function(e){
   const field = e.target;
    const fieldValue = e.target.value;
    if ( fieldValue === '') {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir una fecha";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

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
    if (fieldValue.length <= 7) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes tener al menos 8 caracteres";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

//Validacion contraseña
confirmPasswordField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 7) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes tener al menos 8 caracteres";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
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
        field.nextElementSibling.innerText = `Las extensiones permitidas son ${allowedExt.join(", ")}`;
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
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

