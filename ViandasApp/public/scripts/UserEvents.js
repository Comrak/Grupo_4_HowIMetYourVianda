const formsDelete = document.querySelectorAll('#form-address-delete');


for (let formDelete of formsDelete) {

formDelete.addEventListener('submit', function (e) {
    e.preventDefault();
   
    Swal.fire({ 
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            formDelete.submit()
            console.log('submit');
        }
    })

});
}

// const formsEdit = document.querySelector('.form-address');
// console.log(formsEdit);