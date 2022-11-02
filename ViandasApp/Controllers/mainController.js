const path = require('path');

// Create a new controller object
const renderHome = (req, res) => {
        
    // return res.sendFile(path.resolve('views/home.html'))
    return res.render('home')
}

const renderAbout = (req, res) => {
    return res.render('about')
}

const renderProductDetails = (req, res) => {
    return res.render('productDetails')
}
 
const renderRegister = (req, res) => {
    return res.render('register')
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
                    renderRegister,
                    renderLogin,
                    renderCarrito,
                    renderCarritoPost
                }       