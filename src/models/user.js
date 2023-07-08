const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  email: String,
  password: String,
  phoneNumber: String,
  profileImage: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
