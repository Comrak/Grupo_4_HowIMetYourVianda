const express = require('express');
const router = express.Router();
const usersApiController = require('../../Controllers/api/usersApiController')

//Listado de Ususarios
router.get('/', usersApiController.list);
//Listado de Direcciones
router.get('/address', usersApiController.addressList);
//Detalle de un Ususario
router.get('/:id', usersApiController.detail);

module.exports = router;