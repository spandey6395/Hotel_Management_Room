const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://spandey6395:R43s8If0R4EpfraA@cluster0.mknlo.mongodb.net/Saurabh5678', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Routes
const hotelController = require('./controllers/hotelController');
const userController = require('./controllers/userController');
const availabilityController = require('./controllers/availabilityController');
const bookingController = require('./controllers/bookingController');

app.use('/hotels', hotelController);
app.use('/users', userController);
app.use('/availability', availabilityController);
app.use('/booking', bookingController);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
