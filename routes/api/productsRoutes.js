const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/productsController.js");

router.get("/", controller.listAll);
router.get("/:id", controller.listDetailed);

module.exports = router;

