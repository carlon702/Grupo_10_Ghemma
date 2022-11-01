const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
const controller = require("../controllers/usersController");
//const  validation = require('../validations/userValidations')

//validations
const { body } = require("express-validator");

const registerValidation = [
  body("nombre").notEmpty().withMessage("Campo incompleto"),

  body("apellido").notEmpty().withMessage("Campo incompleto"),

  body("email")
    .notEmpty()
    .withMessage("Campo email incompleto")
    .isEmail()
    .withMessage("Formato de email inválido"),

  body("password")
  .notEmpty()
  .withMessage("Campo password incompleto"),
];
const loginValidation = [
  body("email").notEmpty().withMessage("Campo email incompleto"),

  body("contraseña").notEmpty().withMessage("Campo password incompleto"),
]




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/userImages"));
  },
  filename: function (req, file, cb) {
    const newFileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.get("/login", controller.login);
router.post("/login",loginValidation, controller.sendLogin);

router.get("/register", controller.register);
router.post("/register" ,upload.single('profileImage'),registerValidation  ,controller.createRegister);

module.exports = router;
