
const path = require('path');
const { Op } = require("sequelize");

const fetch = require('node-fetch');

// const User = require('../models/User');

const db = require('../database/models');
const Users = db.Users;
const Country = db.Country;
const UserRol = db.UserRol;
const City = db.City;
const Address = db.Address;


const {validationResult} = require('express-validator');
const { userInfo } = require('os');
const bcryptjs = require('bcryptjs');
const { response } = require('express');

//const renderHome = (req, res) => {
 //   return res.render('home')
//}

//const renderAbout = (req, res) => {
  //  return res.render('about')
//}

const register = async (req, res) => {
    
    const countries = await Country.findAll();
    const userRoles = await UserRol.findAll();
    
    return res.render('users/register',{countries,userRoles})
}

const processRegister = async (req, res) => {
    
 
    const countries = await Country.findAll();
    const userRoles = await UserRol.findAll();

    const resultValidation=validationResult(req)
    // check if there are errors
    if(!resultValidation.isEmpty()){
                return res.render('users/register', {
                                                    errors: resultValidation.mapped(),  // los errores que contiene el objeto resultValidation
                                                    oldData: req.body,
                                                    countries,
                                                    userRoles               
                                                 });
    }

    // if all validations are ok then check if the user already exists
    let userInDB = await Users.findOne({
        where: {'email': req.body.email}  // 'email' es el campo de la tabla 'users
    });

    
    if (userInDB) {
        return res.render('users/register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body,
                        countries:countries,
                        userRoles:userRoles
     });
    }


    // if user is new then create the user in DB

    let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
    let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
    let userToCreate={
        ...req.body,
        country_id: req.body.country,
        role_id: req.body.profile,
        avatar: req.file.filename,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword
    }

    try{
        let userCreated = await Users.create(userToCreate);
        return res.redirect('login')
    }
    catch(error){
        console.log(error)
    }


}

const login = (req, res) => {
    
    return res.render('users/login')
}

const loginProcess = async (req, res) => {

    const bodyData = req.body;

    let userToLogin = await Users.findOne({
        where: {'email': req.body.email},
        include : ['userCountry','userRole'] 
    });
   
   // ******************* check if user exists ************ 
    if (userToLogin) {
    // ****************** Check password *******************    
                let passwordOK=bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (passwordOK) {
                    // elimino del objeto userToLogin la propiedad password
                    delete userToLogin.password;
                    delete userToLogin.confirmPassword;
                    // mantener el usuario logeado en session
                    req.session.userLogged = userToLogin;
                    // si el usuario eligió recordarme
                    if (req.body.rememberMe) {
                        res.cookie('userEmail', req.body.userEmail, {maxAge: (1000 * 60) * 10})
                    }
                    // redirigir a la pagina del usuario
                    res.redirect('/users/profile')
                } 

                return res.render('users/login', {
                    errors: {
                        userPassword: {
                            msg: 'Esta Contraseña es incorrecta'
                        }
                    },
                    oldData: bodyData
                });      
    } else {
        return res.render('users/login', {
            errors: {
                userEmail: {
                    msg: 'Este email no está registrado'
                }
            },
            oldData: bodyData
        });
    }
 }


const profile = (req, res) => {
    
    return res.render('users/usersProfile',{
        user: req.session.userLogged
    });
}

const userEdit = async (req, res) => {
    
    const countries = await Country.findAll();
    const userRoles = await UserRol.findAll();

    
    return res.render('users/userEdit',{countries,userRoles, 
        user: req.session.userLogged})
}

const processEdit = async (req, res) => {
    
    let id = req.session.userLogged.id;
    const dataToUpdate = req.body; 
    const countries = await Country.findAll();
    const userRoles = await UserRol.findAll();
    
    // check if the user has uploaded a new image
    if (req.file != undefined) {
        dataToUpdate.image = req.file.filename;
    }   
    // find the user in the database
    let userToUpdate = await Users.findByPk(id);
    // check if the user exists
    if (!userToUpdate) {
        return res.render('error');
    }
    // check if the updated email already exist
    let userInDB = await Users.findOne({
        where: {'email': req.body.email}  // 'email' es el campo de la tabla 'users
    });
    if(userInDB == null){
        
    }
    
    else if (userInDB.id !== userToUpdate.id) {
        return res.render('users/userEdit', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body,
                        countries:countries,
                        userRoles:userRoles,
                        user: req.session.userLogged
     });
    }

    // if exists then update the user
    let hashedPassword = bcryptjs.hashSync(req.body.password, 10);
    let hashedConfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
    let userUpdate={
        ...req.body,
        country_id: req.body.country,
        role_id: req.body.profile,
        avatar: dataToUpdate.userImage,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword
    }


    const userUpdated = await Users.update(userUpdate, {
        where: {
            id: id
        }
    });
    return res.redirect('login');
}

const deleteUser = (req, res) => {
    let userToDelete = req.session.userLogged.id;
    Users.destroy({
            where:{
                id:userToDelete
            }
        });
        return res.render('users/login')
}

const logout = (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');

}

const carrito = (req, res) => {
    return res.render('users/carritoCompras')
}

const processCarrito = (req, res) => {
    return res.render('users/carritoCompras')
}

const address = async (req, res) => {
    const countries = await Country.findAll();
    const cities = await City.findAll();
     
    return res.render('users/address',{countries,cities})
}

const processAddress =   async (req, res) => {

   

    const addressResultValidation=validationResult(req);
    const countries = await Country.findAll();
    const cities = await City.findAll();


    if(!addressResultValidation.isEmpty()){
        return res.render('users/address', {
                                            errors: addressResultValidation.mapped(),  // los errores que contiene el objeto resultValidation
                                            oldData: req.body,  
                                            countries:countries,
                                            cities:cities
                                            });
    }

    let addressToCreate={
        ...req.body
       }


    try{
        let userCreated = await Address.create(addressToCreate);
        return res.redirect('/users/profile')
    }
    catch(error){
        console.log(error)
    }







}

// ****************************************  API REST  ****************************************
userList = async (req, res) => {
    const users = await Users.findAll();
    return res.json({data:users})
    }

citiesList = async (req, res) => {
    // promesa 1 busca que el servidor este levantado y funcione
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias?');
    // promesa 2 espera a que la promesa 1 se resuelva y el formato sea adecuado para json
    const cities = await response.json()
    return res.json({data:cities.provincias})
}


module.exports = {  
    register,
    processRegister,
    login,
    loginProcess,
    profile,
    userEdit,
    processEdit,
    logout,
    carrito,
    processCarrito,
    address,
    processAddress,
    deleteUser,
    userList,
    citiesList
  
}      