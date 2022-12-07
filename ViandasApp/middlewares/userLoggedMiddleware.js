const User = require('../models/User');


function userLoggedMiddleware (req,res,next) {
    res.locals.isLogged = false;


    let emailInCookie = req.cookies.userEmail;
    let userFound = User.findByField('email', emailInCookie);
    // si la cookie existe y el usuario existe vuelve a logearlo
    if (userFound) {
        req.session.userLogged = userFound;
    }
   

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        // pasar la info del usuario logeado a la variable locals
        res.locals.userLogged = req.session.userLogged;
    }
    console.log(res.locals.userLogged);

    next();
}

module.exports = userLoggedMiddleware;