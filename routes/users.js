var express = require("express");
var router = express.Router();

var { updateUser } = require("../controllers/userController");

router.post("/", updateUser);

module.exports = router;
