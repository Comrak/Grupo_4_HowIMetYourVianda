const { json } = require('express');
const path = require('path');
//const jsonProductos = require('../models/productos.json')
const jsProductos = require('../models/productos')
// Create a new controller object
const renderHome = (req, res) => {
        
// return res.sendFile(path.resolve('views/home.html'))
return res.render('home')
}

const renderAbout = (req, res) => {
    return res.render('about')
}

/*const renderProductDetails = (req, res) => {
    return res.render('products/productDetails')
}*/
const renderProductDetails = (req, res,) => {
     return res.render('products/productDetails',{jsProductos:jsProductos})
 }
 

const renderProductManagement = (req, res) => {
    return res.render('products/productManagement')
}

const renderproductRegistration = (req, res) => {
    return res.render('products/productRegistration')
}
 
const renderRegister = (req, res) => {
    return res.render('register')
}

const renderRegisterPost = (req, res) => {
    return res.render('home')
}

const renderLogin = (req, res) => {
    return res.render('login')
}

const renderCarrito = (req, res) => {
    return res.render('carritoCompras')
}

const renderCarritoPost = (req, res) => {
    return res.render('home')
}




module.exports = {  renderHome,
                    renderAbout,
                    renderProductDetails,
                    renderProductManagement,
                    renderproductRegistration,
                    renderRegister,
                    renderLogin,
                    renderCarrito,
                    renderCarritoPost,
                    renderRegisterPost
                }       