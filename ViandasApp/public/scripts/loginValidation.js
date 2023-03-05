const emailField = document.querySelector("[name=email]");
const passwordField = document.querySelector("[name=password]");
let userEmails =[]


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




const validateFieldRequired = async (e) => {

    const response = await  fetch("http://localhost:3200/api/users")
    const data = await response.json()
    const dataToProcess = data.data

    userEmails = dataToProcess.map(user => user.email)


    const field = e.target;
    const fieldValue = e.target.value;
    // chequear si el campo no esta vacio
    if (fieldValue.trim().length != 0 ) {
        setErrors(field, false);
    // chequear si el email ya existe
            if (!userEmails.includes(fieldValue)) {
                
                field.classList.add("invalid");
                field.classList.remove("valid");
                field.nextElementSibling.classList.add("error");
                field.nextElementSibling.innerText = `${field.value} no existe en la base de datos`;
    } else { 
                setErrors(field,false);
    }
    } 
    // si el campo esta vacio
    else {
                setErrors(field);
    }
}

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(fieldValue)) {
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

