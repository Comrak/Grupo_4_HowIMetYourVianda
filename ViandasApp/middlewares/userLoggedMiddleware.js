
// const User = require('../models/User');

const { Op } = require("sequelize");

// const User = require('../models/User');

const db = require('../database/models');
const Users = db.Users;


async function userLoggedMiddleware (req,res,next) {
    res.locals.isLogged = false;


    let emailInCookie = req.cookies.userEmail;
  

    if (emailInCookie) {


    let userFound = await Users.findOne({
        where: {'email': emailInCookie},
        include : ['userCountry','userRole'] 
    });



    // si la cookie existe y el usuario existe vuelve a logearlo
    if (userFound) {
        req.session.userLogged = userFound;
    }
}

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        // pasar la info del usuario logeado a la variable locals
        res.locals.userLogged = req.session.userLogged;
    }
    // console.log(res.locals.userLogged);
    // console.log(res.locals.isLogged)

    next();
}

module.exports = userLoggedMiddleware;