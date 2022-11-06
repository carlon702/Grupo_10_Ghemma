const { body } = require("express-validator");
const fs = require('fs');
const path = require('path');


function findAll(){
  const data = fs.readFileSync(path.join(__dirname, "../data/user.json"));
  const jsonParsed = JSON.parse(data);
  console.log("data", data)
  return jsonParsed;
};

module.exports= {
registerValidation : [
  body("nombre")
  .notEmpty()
  .withMessage("Campo incompleto"),

  body("apellido").notEmpty()
  .withMessage("Campo incompleto"),

  body("email")
    .notEmpty()
    .withMessage("Campo email incompleto")
    .isEmail()
    .withMessage("Formato de email inválido")
    .custom(function(value, req){
      const users = findAll()

    const usuarioEncontrado =  users.find(function(user){
        return user.email == value
      })
      if(usuarioEncontrado){
        return false
      }else{
        return true
      }
      
    }).withMessage('Email registrado'),

  body("password")
  .notEmpty()
  .withMessage("Campo password incompleto"),
],
loginValidation: [
  body("email")
  .notEmpty()
  .withMessage("Campo email incompleto"),

  body("password")
  .notEmpty()
  .withMessage("Campo password incompleto"),
]
}