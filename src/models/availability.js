const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
  },
  dayOfWeek: String,
  startTime: String,
  endTime: String,
});

const Availability = mongoose.model('Availability', AvailabilitySchema);

module.exports = Availability;
