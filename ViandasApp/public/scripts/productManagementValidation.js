
//console.log('Funciona')

const nameField = document.querySelector("[name=name]");
const priceField = document.querySelector("[name=price]");
const descriptionField = document.querySelector("[name=description]");
const imgField = document.querySelector("[name=img]");
const tagsField = document.querySelector("[name=tags]");

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


// Validacion de Nombre del Producto
nameField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 5) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
});

// Validacion de Precio del Producto
priceField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if ( fieldValue === '') {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
});

// Validacion de Descripcion
descriptionField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 20) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
});


// Validacion de tags del Producto
tagsField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 5 ) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
});


//Validacion Imagen
imgField.addEventListener("change", function(e){
    const field = e.target;
    const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExtension)) {
        setErrors(field);
    } else {
        setErrors(field, false);
    }
  });





// VALIDACIONES FRONT 

//● Creación y modificación de productos

//○ Nombre
//■ Obligatorio.
//■ Deberá tener al menos 5 caracteres.

//○ Descripción
//■ Deberá tener al menos 20 caracteres.

//○ Imagen
//■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

//● (Opcional) Resto de los formularios del sitio


