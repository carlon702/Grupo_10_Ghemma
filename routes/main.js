//

const express = require("express");
const router = express.Router();
const mainRauters = require("../controllers/mainController");

//

router.get("/", mainRauters.home);
router.get("/");
router.get("/");

module.exports = router;
