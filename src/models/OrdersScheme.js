const mongoose = require("mongoose");

const orderScheme = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    payment: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", orderScheme);

module.exports = Orders;
