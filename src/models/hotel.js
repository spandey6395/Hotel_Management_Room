const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dateOfOpening: Date,
  location: String,
  logo: String,
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;
