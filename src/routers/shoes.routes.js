const { Router } = require("express");
// const auth = require("../middlewares/authorization");
const {
  getShoes,
  addShoes,
  updateShoes,
  deleteShoes,
} = require("../controllers/shoes.controllers");

const routers = Router();

routers.get("/get", getShoes);

routers.post("/addshoes", addShoes);

routers.put("/:id", updateShoes);

routers.delete("/:id", deleteShoes);

module.exports = routers;
