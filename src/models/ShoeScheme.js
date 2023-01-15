const mongoose = require("mongoose");

const shoeScheme = mongoose.Schema(
  {
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Shoes = mongoose.model("Shoes", shoeScheme);

module.exports = Shoes;
