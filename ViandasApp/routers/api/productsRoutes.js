const express = require('express');
const router = express.Router();
const productsApiController = require('../../Controllers/api/productsApiController')


//Rutas de APIs:
//Listado de productos:
router.get('/', productsApiController.list);
//Detalle de un producto
router.get('/:id', productsApiController.detail);

module.exports = router;