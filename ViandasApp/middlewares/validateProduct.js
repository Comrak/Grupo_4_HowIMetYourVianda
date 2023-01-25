const { body } = require('express-validator'); 
const path = require('path');

const validations = [
	body('name')
                .notEmpty().withMessage('El nombre del producto no puede estar vacío').bail()
                .isLength({ min: 5 }).withMessage('El nombre del producto debe contener al menos 5 caracteres'),
	body('price')
                .notEmpty().withMessage('El precio no puede estar vacío').bail()
                .isLength( {min: 2 }).withMessage('El precio debe ser un número'),
	body('description')
                .notEmpty().withMessage('La descripción del producto no puede estar vacía').bail()
                .isLength({ min: 20 }).withMessage('La descripción deberá contener al menos 20 caracteres'),
    body('keywords')
                 .notEmpty().withMessage('Las palabras claves del producto no puede estar vacío').bail()
                 .isLength({ min: 5 }).withMessage('Deberá contener al menos 2 palabras'),
    body('img').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        
        if(!file) {
            throw new Error('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);

            if(!acceptedExtensions.includes(path.extname(file.originalname))){
                throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
            }
        }

        return true;
    }),
];

module.exports = validations;
