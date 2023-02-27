window.onload = (event) => {
    let articulos = document.getElementsByTagName('article')
    for (let articulo of articulos) {
        articulo.firstElementChild.addEventListener('click',function(){
            Swal.fire({
                title: articulo.children[0].id,
                text: articulo.innerText.replace('Agregar al carrito', ''),
                imageUrl: articulo.childNodes[1].children[0].firstElementChild.src,
                imageWidth: 400,
                imageHeight: 200,
              })
        })
    }
};