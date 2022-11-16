const { json } = require('express');
const path = require('path');
const fs = require('fs');
const productos = JSON.parse(fs.readFileSync('./models/productos.json', 'utf8'));


function chequearId (arrayProductos){
    arrayProductos.forEach(element => {
        if (element.id == arrayProductos.indexOf(element)+1){
            return null
        } else {
            element.id = arrayProductos.indexOf(element)+1
        }
    });
}

console.log(chequearId())