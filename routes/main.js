//

const express = require("express");
const router = express.Router();
const mainRouters = require("../controllers/mainController");
const userMiddleware = require("../middleware/userMiddleware");

//

router.get("/", mainRouters.home);
router.get("/cart", userMiddleware, mainRouters.cart);
router.get("/", );

module.exports = router;
