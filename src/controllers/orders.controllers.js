const { message, messagError, resApi } = require("../helpers/helpers");
const Orders = require("../models/OrdersScheme");

const getOrders = async (req, res) => {
  try {
    message("Order loaded");
    const order = await Orders.find({});
    resApi(res, "ok", order);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
};

const addOrder = async (req, res) => {
  const { name, email, address, payment, shoes } = req.body;
  try {
    message("Order Sent");
    const newOrder = await Orders.create({
      name,
      email,
      address,
      payment,
      shoes,
    });
    res.json(newOrder);
  } catch {
    messagError("Error sending order");
  }
};

module.exports = {
  getOrders,
  addOrder,
};
