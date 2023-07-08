const express = require('express');
const router = express.Router();
const BookingRequest = require('../models/bookingRequest');

router.post('/', async (req, res) => {
  try {
    const { userId, hotelId, requestedDate } = req.body;

    const bookingRequest = new BookingRequest({
      user: userId,
      hotel: hotelId,
      requestedDate,
      status: 'Pending',
    });
    await bookingRequest.save();

    res.status(201).json({ message: 'Booking request created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const bookingRequests = await BookingRequest.find({ user: userId }).populate('hotel', 'name');
    res.json({ bookingRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/:bookingId', async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const { status } = req.body;

    await BookingRequest.findByIdAndUpdate(bookingId, { status });

    res.json({ message: 'Booking request updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
