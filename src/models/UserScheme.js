const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userScheme = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    require: true,
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, "invalid email"],
    lowercase: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userScheme.plugin(uniqueValidator, { msg: "Email is already registered" });
const Users = mongoose.model("user", userScheme);

module.exports = Users;
