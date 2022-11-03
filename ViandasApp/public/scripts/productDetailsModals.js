window.onload = (event) => {
    let articulos = document.getElementsByTagName('article')
    for (let articulo of articulos) {
        articulo.firstElementChild.addEventListener('click',function(){
            Swal.fire({
                title: articulo.children[0].id,
                text: articulo.innerText,
                imageUrl: articulo.firstElementChild.currentSrc,
                imageWidth: 400,
                imageHeight: 200,
              })
        })
    }
};