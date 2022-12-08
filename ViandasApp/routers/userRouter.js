const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');

const userController = require('../controllers/userController');
const validations = require('../middlewares/userValidations');
const guestMiddleware = require('../middlewares/guestMiddleware');

const multer = require("multer");
const authMiddleware = require('../middlewares/authMiddleware');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('public/img/users'));
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});


const uploadFile = multer({ storage });



// Formulario de registro
router.get('/register', guestMiddleware,userController.renderRegister);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations,userController.renderRegisterPost);

// Formulario de login
router.get('/login', guestMiddleware, userController.renderLogin);

// Procesar el login
router.post('/login', userController.renderLoginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware,userController.profile);

// Procesar el LogOut
router.get('/logout', userController.logout);

//Carrito de Compras
router.get('/carrito', userController.renderCarrito);
router.post('/carrito', userController.renderCarritoPost);

module.exports= router;