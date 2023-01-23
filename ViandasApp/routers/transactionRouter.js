const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');
// importar controlador
const transactionController = require('../controllers/transactionController');
const validations = require('../middlewares/uservalidations');
const guestMiddleware = require('../middlewares/guestMiddleware');


// formulario de carrito de compras
router.get('/carrito', transactionController.viewCarrito);
// router.post('/carrito', transactionController.processCarrito);




module.exports= router;