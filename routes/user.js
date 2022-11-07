const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const controller = require("../controllers/usersController");
const validation = require("../validations/userValidations");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/userImages"));
  },
  filename: function (req, file, cb) {
    const newFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

//registro
router.get("/register", controller.register);
router.post(
  "/register",
  upload.single("profileImage"),
  validation.registerValidation,
  controller.createRegister
);

//login
router.get("/login", controller.login);
router.post("/login", validation.loginValidation, controller.sendLogin);
router.post("/logout", controller.logout);

module.exports = router;
