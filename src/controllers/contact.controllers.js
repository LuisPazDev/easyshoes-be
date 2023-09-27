const { message, messagError, resApi } = require("../helpers/helpers");
const Contact = require("../models/ContactScheme");

const addContact = async (req, res) => {
  const { name, email, info } = req.body;
  try {
    message("Message Sent");
    const newContact = await Contact.create({
      name,
      email,
      info,
    });
    res.json(newContact);
  } catch {
    messagError("Error sending message");
  }
};

module.exports = {
  addContact,
};
