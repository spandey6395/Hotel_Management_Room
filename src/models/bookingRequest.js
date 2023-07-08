const mongoose = require('mongoose');

const BookingRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
  },
  requestedDate: Date,
  status: String,
});

const BookingRequest = mongoose.model('BookingRequest', BookingRequestSchema);

module.exports = BookingRequest;
