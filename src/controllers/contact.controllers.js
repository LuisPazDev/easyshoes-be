const { message, messagError, resApi } = require("../helpers/helpers");
const Contact = require("../models/ContactScheme");

const getContact = async (req, res) => {
  try {
    message("Contacts loaded");
    const contact = await Contact.find({});
    resApi(res, "ok", contact);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
};

const addContact = async (req, res) => {
  const { name, email, comment } = req.body;
  try {
    message("Message Sent");
    const newContact = await Contact.create({
      name,
      email,
      comment,
    });
    res.json(newContact);
  } catch {
    messagError("Error sending message");
  }
};

module.exports = {
  getContact,
  addContact,
};
