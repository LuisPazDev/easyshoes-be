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
    shoes: [
      {
        brand: {
          type: String,
          required: true,
        },
        model: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
      },
    ],
    promocode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", orderScheme);

module.exports = Orders;
