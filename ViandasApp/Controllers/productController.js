const { json } = require('express');
const path = require('path');
const jsProductos = require('../models/productos')

const renderProductDetails = (req, res,) => {
    return res.render('products/productDetails',{jsProductos:jsProductos})
}

const renderProductManagement = (req, res) => {
   return res.render('products/productManagement')
}

const renderproductRegistration = (req, res) => {
   return res.render('products/productRegistration')
}

module.exports = { 
    renderProductDetails,
    renderProductManagement,
    renderproductRegistration
}