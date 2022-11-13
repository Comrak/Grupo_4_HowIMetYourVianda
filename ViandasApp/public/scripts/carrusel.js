
const grande = document.querySelector('.big-container');
const punto = document.querySelectorAll('.punto');

// cuando click en punto
    // saber la posicion de ese punto
    // aplicar un transform translateX al grande
    // quitar la clase activo a todos los puntos
    // agregar la clase activo al punto que se clickeo

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        
        let posicion = i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto,i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
})
})