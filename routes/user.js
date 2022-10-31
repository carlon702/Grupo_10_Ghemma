const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
const controller = require("../controllers/usersController");
const  validation = require('../validations/userValidations')


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, "../public/images/userImages"));
  },
  filename: function (req, file, cb) {
    const newFileName =
    console.log(newFileName)
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.get("/login", controller.login);
router.post("/login", controller.sendLogin);

router.get("/register", controller.register);
router.post("/register", validation.registerValidation ,upload.single  ('profileImage') ,controller.createRegister);

module.exports = router;
