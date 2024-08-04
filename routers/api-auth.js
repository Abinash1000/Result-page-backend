const express = require('express');
const router = express.Router();
const controllers = require("../controllers/auth-controllers");  

router.route("/").get(controllers.home);

router.route("/register").post(controllers.register);

router.route("/result").post(controllers.result);

module.exports = router;