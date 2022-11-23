const { json } = require('express');
const path = require('path');

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
    return res.render('home')
}

const renderLogin = (req, res) => {
    return res.render('users/login')
}

const renderCarrito = (req, res) => {
    return res.render('users/carritoCompras')
}

const renderCarritoPost = (req, res) => {
    return res.render('')
}


module.exports = {  
    renderRegister,
    renderLogin,
    renderCarrito,
    renderCarritoPost,
    renderRegisterPost
}       