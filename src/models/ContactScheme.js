const mongoose = require("mongoose");

const contactScheme = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    info: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactScheme);

module.exports = Contact;
