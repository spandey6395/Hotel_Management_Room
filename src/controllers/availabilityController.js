const express = require('express');
const router = express.Router();
const Availability = require('../models/availability');

router.post('/', async (req, res) => {
  try {
    const { hotelId, dayOfWeek, startTime, endTime } = req.body;

    const availability = new Availability({
      hotel: hotelId,
      dayOfWeek,
      startTime,
      endTime,
    });
    await availability.save();

    res.status(201).json({ message: 'Availability created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:date', async (req, res) => {
  try {
    const requestedDate = new Date(req.params.date);
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
      requestedDate.getDay()
    ];

    const availableHotels = await Availability.find({ dayOfWeek })
      .populate('hotel', 'name')
      .select('hotel')
      .exec();

    res.json({ availableHotels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
