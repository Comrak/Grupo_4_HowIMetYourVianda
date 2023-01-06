const { body } = require('express-validator');
const path = require('path');

const addressValidations = [

    body('name')  // el name de la vista
                    .notEmpty().withMessage('Debes completar el campo Alias de la Dirección').bail()
                    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('street')
                    .notEmpty().withMessage('Debes completar el campo Calle').bail()
                    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('number')    
                    .notEmpty().withMessage('Debes completar el campo Numero'),

    body('floor')    
                    .notEmpty().withMessage('Debes completar el campo Piso'),

    body('dept')    
                    .notEmpty().withMessage('Debes completar el campo depto'),

    body('zipCode')    
                    .notEmpty().withMessage('Debes completar el campo ZipCode'),
                    
    body('city_id')
                    .notEmpty().withMessage('Debes completar el campo Ciudad'),

    body('country_id')
                    .notEmpty().withMessage('Debes completar el campo Pais')

                    
    ]

    module.exports = addressValidations;