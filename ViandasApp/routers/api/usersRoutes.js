const express = require('express');
const router = express.Router();
const usersApiController = require('../../Controllers/api/usersApiController')

//Listado de productos
router.get('/', usersApiController.list);
//Detalle de un producto
router.get('/:id', usersApiController.detail);

module.exports = router;