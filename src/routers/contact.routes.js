const { Router } = require("express");
const {
  addContact,
  getContact,
} = require("../controllers/contact.controllers");

const routers = Router();

routers.get("/contact", getContact);

routers.post("/contact", addContact);

module.exports = routers;
