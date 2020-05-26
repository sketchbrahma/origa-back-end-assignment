var express = require("express");
var router = express.Router();

var { orderDetailsByUser } = require("../controllers/orderController");

router.get("/", orderDetailsByUser);

module.exports = router;
