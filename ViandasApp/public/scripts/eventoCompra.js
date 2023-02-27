window.onload = (event) => {
    let accionBoton = document.getElementById('btnCompra')
    accionBoton.addEventListener('click',function(){
        Swal.fire(
            'Felicidades!',
            'Su pedido esta en camino',
            'success'
        )
    })

    let delBtn = document.getElementById('deleteProduct');
    delBtn.addEventListener('click',function(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                return fetch(`/products/delete/<%=productToFind.id%>}`)
                .then(response => {
                    if (!response.ok) {
                    throw new Error(response.statusText)
                    }
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                })
                .catch(error => {
                    Swal.fire(
                        'Error!',
                        'ups hubo un problema.',
                        'error'
                    )
                })
            }
          })
    })
}