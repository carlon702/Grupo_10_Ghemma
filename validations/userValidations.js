const { body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const User = db.User;




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
    .custom(async function (value, { req }) {
      const user = await User.findOne({ where: { email: value } });
      if (user) {
        return Promise.reject(new Error('Email ya registrado'));
      }
    }).withMessage('Email ya registrado'),
  body("password")
  .notEmpty()
  .withMessage("Campo password incompleto"),
],
loginValidation: [
  body("email")
  .notEmpty()
  .withMessage("Campo email incompleto")
  .custom(async function (value, { req }) {
      const user = await User.findOne({ where: { email: value } });
      if (!user) {
        return Promise.reject(new Error('Email invalido'));
      }
    }).withMessage('Email invalido'),

  body("password")
  .notEmpty()
  .withMessage("Campo password incompleto")
  .custom(async function (value, { req }) {
      const user = await User.findOne({ where: { password: value } });
      if (!user) {
        return Promise.reject(new Error('Password invalido'));
      }
    }).withMessage('Password invalido'),
]
}