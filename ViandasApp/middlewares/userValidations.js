const { body } = require('express-validator');
const path = require('path');

const validations = [

    body('fullName')
                    .notEmpty().withMessage('Falta completar el campo Nombre y Apellido').bail()
                    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('birthDate')
                    .notEmpty().withMessage('Falta completar el campo Fecha de Nacimiento').bail()
                    .isDate().withMessage('Falta ingresar una fecha válida'),
    body('email')    
                    .notEmpty().withMessage('Falta completar el campo Email').bail()
                    .isEmail().withMessage('Falta ingresar un email válido'),
    body('mobilePhone')
                    .notEmpty().withMessage('Falta completar el campo Teléfono').bail()
                    .isLength({ min: 10 }).withMessage('El teléfono debe tener al menos 10 caracteres'),
    body('address')
                    .notEmpty().withMessage('Falta completar el campo Dirección').bail()
                    .isLength({ min: 5 }).withMessage('La dirección debe tener al menos 5 caracteres'),
    body('city')    
                    .notEmpty().withMessage('Debes completar el campo Ciudad').bail()
                    .isLength({ min: 2 }).withMessage('La ciudad debe tener al menos 2 caracteres'), 
    body('country').
                    notEmpty().withMessage('Debes completar el campo País'),

    body('profile').
                    notEmpty().withMessage('Falta completar el rol de usuario'),
    
    body('password')
                    .notEmpty().withMessage('Falta completar el campo Contraseña').bail()
                    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('confirmPassword')
                    .notEmpty().withMessage('Falta completar el campo Confirmar Contraseña').bail()
                    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres').bail()
                    .custom((value, { req }) => {
                        if (value !== req.body.password) {
                            throw new Error('Las contraseñas no coinciden');
                        }
                        return true;
                    }),
                        
    body('avatar').custom((value, { req }) => {
                    let file = req.file;
                    let acceptedExtentions =['.jpg','.jpeg','.png','.gif']
                    if (!file) {
                        throw new Error('Falta subir foto');
                    }else{
                        if (!acceptedExtentions.includes(path.extname(file.originalname))) {
                            throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtentions.join(', '))
                        }
                        
                    }
    
                 return true;
    })
                    
    ]

    module.exports=validations