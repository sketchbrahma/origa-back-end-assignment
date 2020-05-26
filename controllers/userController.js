const Order = require("../models/orderModel");
const User = require("../models/userModel");

exports.updateUser = async (req, res) => {
  try {
    const users = await User.find();
    const orders = await Order.find();
    users.forEach(async (user) => {
      const orderArr = orders.filter((order) => {
        return order.userId == user.userId;
      });
      const result = await User.updateOne(
        { userId: user.userId },
        {
          $set: {
            noOfOrders: orderArr.length,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    });

    res.json({ success: true, message: "Successfully Updated" });
  } catch (error) {
    console.log("error", error);
    res.json({ message: error });
  }
};
