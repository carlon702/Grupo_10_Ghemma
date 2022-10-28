const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const newFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.get("/login", controller.login);
router.post("/login", controller.sendLogin);
router.get("/register", controller.register);
router.post("/register", controller.createRegister);

module.exports = router;
