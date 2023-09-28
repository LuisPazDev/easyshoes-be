require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { message, messagError, resApi } = require("../helpers/helpers");
const Users = require("../models/UserScheme");

const getUser = async (req, res) => {
  try {
    message("User loaded");
    const user = await Users.findById(req.user.id);
    resApi(res, "ok", user);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    message("User Created");
    const newUser = await Users.create({
      username,
      email,
      password: hashPassword,
    });
    const payload = {
      user: {
        id: newUser._id,
      },
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    msg(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exists" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Password" });
    }

    // Create JWT token
    const payload = {
      user: {
        id: user._id,
      },
    };
    if (email && password) {
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } else {
      res.status(400).json({ msg: "Email and Password are required" });
    }
  } catch (error) {
    msg(error);
  }
};

const updateUser = async (req, res) => {
  try {
    message("User updated");
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resApi(res, "ok", user);
  } catch {
    messagError("Error updating user");
  }
};

const deleteUser = async (req, res) => {
  try {
    message("User deleted");
    const user = await Users.findByIdAndRemove(req.params.id);
    resApi(res, "ok", user);
  } catch {
    messagError("Error deleting User");
  }
};

module.exports = {
  getUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
};
