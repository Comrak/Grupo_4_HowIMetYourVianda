
//console.log('Funciona')

const nameField = document.querySelector("[name=name]");
const priceField = document.querySelector("[name=price]");
const descriptionField = document.querySelector("[name=description]");
const imgField = document.querySelector("[name=img]");


// Validacion de Nombre del Producto
nameField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 5) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir el nombre del producto";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});



// Validacion de Descripcion
descriptionField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 20) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir una descripción del producto de un mínimo de 20 caracteres";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});


//Validacion Imagen
imgField.addEventListener("change", function(e){
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


