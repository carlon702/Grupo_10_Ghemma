const { body } = require("express-validator");
const fs = require('fs');
const path = require('path');


function findAll() {
    const data = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const jsonParsed = JSON.parse(data);
    return jsonParsed;
  };


const productsValidation = {

       createValidation : [
        body("name")
        .notEmpty()
        .withMessage("Deber introducir un nombre")
        .custom(function(value, req){
        const products = findAll()

    const foundProduct =  products.find(function(product){
        return product.name == value
      })
      if(foundProduct){
        return false
      }else{
        return true
      }
      
    }).withMessage('Producto ya registrado'),

        body("description")
        .notEmpty()
        .withMessage("Debes dar una descripcion")
        .isLength({ min: 15 })
        .withMessage("La descripcion debe tener 15 o más caracteres"),

        body("color")
        .notEmpty()
        .withMessage("Debes introducir un color"),

        body("price")
        .isEmpty()
        .withMessage("Introduce un precio")
        .isNumeric()
        .withMessage("Introduce un valor numerico"),

        body("discount")
        .isNumeric()
        .withMessage("Introduce un valor numerico")
        .isLength({max: 2})
        .withMessage("El descuento debe tener 2 caracteres como maximo"),


       ],

       editValidation : [

        body("name")
        .notEmpty()
        .withMessage("Debes introducir un nombre"),
        
      
  

        body("description")
        .notEmpty()
        .withMessage("Debes dar una descripcion")
        .isLength({ min: 15 })
        .withMessage("La descripcion debe tener 15 o más caracteres"),

        body("color")
        .notEmpty()
        .withMessage("Debes introducir un color"),

        body("price")
        .isEmpty()
        .withMessage("Introduce un precio")
        .isNumeric()
        .withMessage("Introduce un valor numerico"),

        body("discount")
        .isNumeric()
        .withMessage("Introduce un valor numerico")
        .isLength({max: 2})
        .withMessage("El descuento debe tener 2 caracteres como maximo"),

       ]

       

};

module.exports = productsValidation;

  
