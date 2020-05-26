const mongoose = require("mongoose");
var User = require("./userModel");

const orderSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: User,
  },
  subTotal: {
    type: Number,
    required: [true, "sub total required"],
  },
  date: {
    type: Date,
    required: [true, "date required"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
