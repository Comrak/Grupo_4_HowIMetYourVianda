const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.renderHome);
router.get('/about', mainController.renderAbout);
router.get('/productDetails', mainController.renderProductDetails);
router.get('/register', mainController.renderRegister);
router.get('/login', mainController.renderLogin);
router.get('/carrito', mainController.renderCarrito);
router.post('/carritoPost', mainController.renderCarritoPost);


module.exports = router;