//

const express = require("express");
const router = express.Router();
const mainRouters = require("../controllers/mainController");
const userMiddleware = require("../middleware/userMiddleware");

//

router.get("/", mainRouters.home);
router.get("/dos", mainRouters.homeDos);
router.get("/cart", userMiddleware, mainRouters.cart);
router.get("/", );
router.post("/search", mainRouters.search )
module.exports = router;
