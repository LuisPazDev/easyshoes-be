const { message, messagError, resApi } = require("../helpers/helpers");
const Shoes = require("../models/ShoeScheme");

const getShoes = async (req, res) => {
  try {
    message("Shoes loaded");
    const shoes = await Shoes.find({});
    resApi(res, "ok", shoes);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
};

const addShoes = async (req, res) => {
  const { brand, model, price, size, img } = req.body;
  try {
    message("Shoes Created");
    const newShoes = await Shoes.create({
      brand,
      model,
      price,
      size,
      img,
    });
    res.json(newShoes);
  } catch {
    messagError("Error creating user");
  }
};

const updateShoes = async (req, res) => {
  try {
    message("Shoes updated");
    const shoes = await Shoes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resApi(res, "ok", shoes);
  } catch {
    messagError("Error updating shoes");
  }
};

const deleteShoes = async (req, res) => {
  try {
    message("Shoes deleted");
    const shoes = await Users.findByIdAndRemove(req.params.id);
    resApi(res, "ok", shoes);
  } catch {
    messagError("Error deleting Shoes");
  }
};

module.exports = {
  getShoes,
  addShoes,
  updateShoes,
  deleteShoes,
};
