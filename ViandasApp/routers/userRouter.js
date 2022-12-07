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




router.get('/register', guestMiddleware,userController.renderRegister);
router.post('/register', uploadFile.single('avatar'), validations,userController.renderRegisterPost);
router.get('/login', userController.renderLogin);
router.get('/carrito', userController.renderCarrito);
router.post('/', userController.renderCarritoPost);

module.exports= router;