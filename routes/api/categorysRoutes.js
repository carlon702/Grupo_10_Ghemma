const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/categorysController.js");

router.get("/", controller.listAll);

module.exports = router;