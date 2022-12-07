const { json } = require('express');
const path = require('path');
const User = require('../models/User');

const {validationResult} = require('express-validator');
const {userInfo} = require('os');
const bcryptjs = require('bcrypt');



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
    const resultValidation=validationResult(req)
        // check if there are errors
        if(!resultValidation.isEmpty()){
                    return res.render('users/register', {
                                                        errors: resultValidation.mapped(),
                                                        oldData: req.body
                                                     });
        }
    
        // if all validations are ok then check if the user already exists
        let userInDB = User.findByField('email', req.body.email);
    
        if (userInDB) {
            return res.render('users/register', {
                            errors: {
                                email: {
                                    msg: 'Este email ya está registrado'
                                }
                            },
                            oldData: req.body
         });
        }
    
    
        // if user is new then create the user in DB
    
        let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
        let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
        let userToCreate={
            ...req.body,
            avatar: req.file.filename,
            password: hashedPassword,
            confirmPassword: hashedConfirmPassword
    
        }
    
        User.create(userToCreate);
        return res.redirect('login')
    
    
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