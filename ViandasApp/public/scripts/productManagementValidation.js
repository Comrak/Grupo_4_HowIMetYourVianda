//console.log('Funciona')

const nameField = document.querySelector("[name=name]");
const priceField = document.querySelector("[name=price]");
const descriptionField = document.querySelector("[name=description]");
const imgField = document.querySelector("[name=img]");
const tagsField = document.querySelector("[name=tags]");
const formDelete = document.querySelectorAll("#product-delete-form");

const setErrors = (field, isError = true, errorDesc = false) => {
  if (isError) {
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.nextElementSibling.classList.add("error");
    if (errorDesc) {
      field.nextElementSibling.innerText = `${field.name} debe tener mas de 20 caracteres`;
    } else {
      field.nextElementSibling.innerText = `${field.name} es un campo requerido`;
    }
  } else {
    field.classList.add("valid");
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
};

// Validacion de Nombre del Producto
nameField.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length < 5) {
    setErrors(field);
  } else {
    setErrors(field, false);
  }
});

// Validacion de Precio del Producto
priceField.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue === "") {
    setErrors(field);
  } else {
    setErrors(field, false);
  }
});

//no permitimos nada que no sea un numero en price
priceField.addEventListener("keypress", function inpNum(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
});

// Validacion de Descripcion
descriptionField.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length < 20) {
    setErrors(field, true, true);
  } else {
    setErrors(field, false);
  }
});

// Validacion de tags del Producto
tagsField.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length < 5) {
    setErrors(field);
  } else {
    setErrors(field, false);
  }
});

//Validacion Imagen

//Campo Completo
imgField.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue === "") {
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
imgField.addEventListener("change", function (e) {
  const field = e.target;
  const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
  const allowedExt = ["jpg", "jpeg", "png", "gif"];
  if (!allowedExt.includes(fileExtension)) {
    field.nextElementSibling.classList.add("error");
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.nextElementSibling.innerText = `Las extensiones permitidas son ${allowedExt.join(
      ", "
    )}`;
  } else {
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
    field.classList.remove("invalid");
    field.classList.add("valid");
  }
});

formDelete.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Erased!", "", "success");
      formDelete.submit();
    }
  });
});
