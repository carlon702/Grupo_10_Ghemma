const {body} = require ('express-validator');

module.exports = {
    registerValidation :[
        body("nombre")
        .notEmpty()
        .withMessage("Campo incompleto"),

        body("apellido")
        .notEmpty()
        .withMessage("Campo incompleto"),

        body("email")
         .notEmpty()
         .withMessage("Campo email incompleto")
         .isEmail()
         .withMessage("Formato de email inválido"),

        body("contraseña")
         .notEmpty()
         .withMessage("Campo password incompleto")
        ],
    loginValidation:[
        body("email")
         .notEmpty()
         .withMessage("Campo email incompleto"),

        body("contraseña")
         .notEmpty()
         .withMessage("Campo password incompleto")

    ]    


    }
