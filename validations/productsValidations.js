const { body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const Product = db.Product;
const Category = db.Category;
const Discount = db.Discount;


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
        .custom(async function (value, { req }) {
          const product = await Product.findOne({ where: { name: value } });
          if (product) {
            return Promise.reject(new Error('Producto ya registrado'));
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
        .notEmpty()
        .withMessage("Introduce un precio")
        .isNumeric()
        .withMessage("Introduce un valor numerico"),

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
        .notEmpty()
        .withMessage("Introduce un precio")
        .isNumeric()
        .withMessage("Introduce un valor numerico"),

       ]

       

};

module.exports = productsValidation;

  
