const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require("multer");
// multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('public/img/productos'));
    },
    filename: (req, file, cb) => {
        cb(null, `img_${Date.now()}${path.extname(file.originalname)}`);
    }
});


const upload = multer({ storage });


const productController = require('../controllers/productController');

// Get all Products
router.get('/', productController.renderProductAll);

//Create a new Product
router.get('/create', productController.renderProductCreate);
router.post('/', upload.single("img"), productController.renderProductRegistration);

//Get a single Product with id
router.get('/:id', productController.renderDetail);

//Update a Product with id
router.get('/edit/:id', productController.renderProductEdit)
router.put('/:id',upload.single("img"),productController.renderProductUpdate);

// Delete a record
router.delete('/delete/:id', productController.renderProductDelete); 


module.exports = router;