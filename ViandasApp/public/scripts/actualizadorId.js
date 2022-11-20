function actualizarId (array){
    array.forEach(element => {
        const id = element.id;
        const idBuscado = array.find(element => element.id === id);
        const elementoBuscado = array.indexOf(idBuscado) + 1;
        if(element.id == elementoBuscado){
        } else {
            element.id = elementoBuscado;
        }
        JSON.stringify(array);
    });
}
module.exports = actualizarId;