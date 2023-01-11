const express = require('express');
const router = express.Router();
const path = require('path')
const productController = require('../controllers/productController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require("multer");

// ************************** Multer **************************
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('public/img/productos'));
    },
    filename: (req, file, cb) => {
        cb(null, `img_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });



// *********************** Routers ***************************
// Get all Products
router.get('/', productController.renderProductAll);

//Create a new Product
router.get('/create',authMiddleware ,productController.renderProductCreate);
router.post('/', upload.single("img"), productController.renderProductRegistration);

//Get a single Product with id
router.get('/detail/:id', authMiddleware,productController.renderDetail);

//Update a Product with id
router.get('/:id', authMiddleware,productController.renderProductEdit)
router.put('/:id',upload.single("img"),productController.renderProductUpdate);

// Delete a record
router.delete('/delete/:id', authMiddleware,productController.renderProductDelete); 




module.exports = router;