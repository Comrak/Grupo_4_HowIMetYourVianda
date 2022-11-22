const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('public/img/productos'));
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});


const upload = multer({ storage });


const userController = require('../controllers/userController');

router.get('/register', userController.renderRegister);
router.post('/', userController.renderRegisterPost);
router.get('/login', userController.renderLogin);
router.get('/carrito', userController.renderCarrito);
router.post('/', userController.renderCarritoPost);

module.exports= router;