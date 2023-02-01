const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userScheme = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please fill a valid email address",
    ],
    lowercase: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userScheme.plugin(uniqueValidator, { message: "Email is already registered" });
const Users = mongoose.model("user", userScheme);

module.exports = Users;
