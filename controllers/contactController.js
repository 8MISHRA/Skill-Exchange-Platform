const Contact = require('../models/contactModel');

// Handle contact form submission
const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact information send successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save contact information.' });
  }
};

module.exports = { submitContact };
