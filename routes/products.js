const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get('/detail', controller.detail);
router.get('/create', controller.create);
router.get('/edit', controller.edit);
router.get('/list', controller.list);

module.exports = router;
