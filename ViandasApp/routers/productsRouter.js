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


const productController = require('../controllers/productController');


router.get('/', productController.renderProductDetails);
router.get('/create', productController.renderProductManagement);
router.get('/:id', productController.renderDetailId);
router.get('/:id/edit', productController.renderProductEdit);
router.post('/', upload.single("img"), productController.renderproductRegistration);
router.delete("/:id/product", productController.renderProductDelete);


module.exports = router;