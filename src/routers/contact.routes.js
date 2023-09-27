const { Router } = require("express");
const { addContact } = require("../controllers/contact.controllers");

const routers = Router();

routers.get("/", (req, res) => {
  res.send("Contact Page");
});

routers.post("/contact", addContact);

module.exports = routers;
