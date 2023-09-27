const { Router } = require("express");
const {
  addContact,
  getContact,
} = require("../controllers/contact.controllers");

const routers = Router();

routers.get("/get", getContact);

routers.post("/addcontact", addContact);

module.exports = routers;
