const nameField = document.querySelector("[name=name]");
const streetField = document.querySelector("[name=street]");
const numberField = document.querySelector("[name=number]");
const zipCodeField = document.querySelector("[name=zipCode]");
//const city_idField = document.querySelector("[name=city_id]");
//const country_idField = document.querySelector("[name=country_id]");

// Validacion Alias
nameField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 3) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir un Alias la Calle";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

// Validacion de Calle
streetField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 5) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes escribir el Nombre de la Calle";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

//Validacion Altura
numberField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length <= 2) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes colocar una Altura de Calle";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});

//Validacion Código Postal
zipCodeField.addEventListener("blur", function(e){
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 4) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Debes colocar una Código Postal";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
});


        

