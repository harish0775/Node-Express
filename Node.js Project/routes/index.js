
// require express

const express = require("express");

const router = express.Router();

//require controller form file address ../controllers/home_controller
const homeController = require("../controllers/home_controller");

// get router
router.get("/", homeController.home);

router.get("/form",homeController.form);
// export router : export this file to  main file(index.js).

module.exports = router;



