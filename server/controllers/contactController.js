const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();

    await sendEmail(name, email, phone); // optional

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { submitContact };
