const express = require('express');
const { submitContact } = require('../controllers/contactController');

const router = express.Router();

// Route for submitting contact form
router.post('/', submitContact);

module.exports = router;
