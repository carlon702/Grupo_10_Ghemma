const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("../controllers/productsController");

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

router.get("/detail/:id", controller.detail);

router.get("/create", controller.create);
router.post("/create", upload.single("image"), controller.store);

router.get("/edit/:id", controller.edit);
router.put("/edit/:id", upload.single("image"), controller.update);

router.delete("/delete/:id", controller.delete);

router.get("/list", controller.list);

module.exports = router;
