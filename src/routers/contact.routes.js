const { Router } = require("express");
const { addContact } = require("../controllers/contact.controllers");

const routers = Router();

routers.post("/addcontact", addContact);

module.exports = routers;
