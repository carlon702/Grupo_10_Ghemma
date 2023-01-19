const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/productsController.js");

router.get("/", controller.listByCategory);

module.exports = router;