const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: {
    day: String,
    month: String
  },
  hour: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);