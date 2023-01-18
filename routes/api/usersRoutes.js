const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/usersController.js");



//list all users
router.get("/", controller.listAll);
router.get("/:id", controller.listDetailed);

module.exports = router;
