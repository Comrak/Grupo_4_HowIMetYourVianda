const { json } = require('express');
const path = require('path');
const fs = require('fs');
const usuarios = JSON.parse(fs.readFileSync('./models/users.json', 'utf8'));
const actualizadorId = require('../public/scripts/actualizadorId')

//const renderHome = (req, res) => {
 //   return res.render('home')
//}

//const renderAbout = (req, res) => {
  //  return res.render('about')
//}

const renderRegister = (req, res) => {
    return res.render('users/register')
}

const renderRegisterPost = (req, res) => {
    const id = usuarios[usuarios.length - 1].id + 1 
    const newUser = {
        "id": id,
        "firstName": req.body.fisrtName,
        "lastName": req.body.lastName,
        "birthDate": req.body.birthDate,
        "email": req.body.email,
        "phone": req.body.phone,
        "aderss": req.body.adress,
        "imagen": "/img/userImg/"+req.file.originalname,
        "tags": (req.body.keywords).split(";"),
        "password": req.body.password
    }
    usuarios.push(newUser);
    actualizadorId(usuarios);
    let data = JSON.stringify(usuarios);
    fs.writeFileSync('./models/users.json', data);
    return res.render('users/login')
}

const renderLogin = (req, res) => {
    return res.render('users/login')
}

const renderCarrito = (req, res) => {
    return res.render('users/carritoCompras')
}

const renderCarritoPost = (req, res) => {
    return res.render('users/carritoCompras')
}


module.exports = {  
    renderRegister,
    renderLogin,
    renderCarrito,
    renderCarritoPost,
    renderRegisterPost
}       