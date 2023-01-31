const { body } = require('express-validator');
const path = require('path');

const logiValidations = [


    body('email')    
                    .notEmpty().withMessage('Debes completar el campo Email').bail()
                    .isEmail().withMessage('Debes ingresar un email válido'),

    
    body('password')
                    .notEmpty().withMessage('Debes completar el campo Contraseña').bail()
                    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
            
    ]

    module.exports = logiValidations;