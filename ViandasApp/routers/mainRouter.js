const express = require('express');
const router = express.Router();
const path = require('path')
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

const mainController = require('../controllers/mainController');

router.get('/', mainController.renderHome);
router.get('/about', mainController.renderAbout);
router.get('/register', mainController.renderRegister);
router.post('/register', mainController.renderRegisterPost);
router.get('/login', mainController.renderLogin);
router.get('/carrito', mainController.renderCarrito);
router.post('/carritoPost', mainController.renderCarritoPost);


module.exports = router;