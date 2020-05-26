var express = require("express");
var router = express.Router();

var { getAllOrders } = require("../controllers/orderController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
