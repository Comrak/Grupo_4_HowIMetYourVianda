window.onload = (event) => {
    let accionBoton = document.getElementById('btnCompra')
    accionBoton.addEventListener('click',function(){
        Swal.fire(
            'Felicidades!',
            'Su pedido esta en camino',
            'success'
        )
    })
}