const express = require("express");
const router = express.Router();
const path = require("path");
const  validation = require('../validations/productsValidations');
const controller = require("../controllers/productsController");
const adminMiddleware = require("../middleware/adminMiddleware")

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const newFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.get("/detail/:id", controller.detail);

router.get("/create",adminMiddleware, controller.create);
router.post("/create", upload.single("image"), validation.createValidation, controller.store);

router.get("/edit/:id",adminMiddleware, controller.edit);
router.put("/edit/:id", upload.single("image"), validation.editValidation, controller.update);

router.delete("/delete/:id", controller.delete);

router.get("/list", controller.list);
router.get("/list/smartphones", controller.listSmartphones);
router.get("/list/notebooks", controller.listNotebooks);
router.get("/list/tvs", controller.listTvs);
router.get("/list/tablets", controller.listTablets);



module.exports = router;
