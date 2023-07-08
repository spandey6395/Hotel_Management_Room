const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Hotel = require('../models/hotel');

router.post('/', async (req, res) => {
  try {
    const { name, email, password, dateOfOpening, location, logo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const hotel = new Hotel({
      name,
      email,
      password: hashedPassword,
      dateOfOpening,
      location,
      logo,
    });
    await hotel.save();

    res.status(201).json({ message: 'Hotel created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
