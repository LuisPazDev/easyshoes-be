const { message, messagError, resApi } = require("../helpers/helpers");
const Contact = require("../models/ContactScheme");

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
  addContact,
};
