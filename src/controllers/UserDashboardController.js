const Booking = require('../models/Booking');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const booking = await Booking.find();

    return res.json(booking);
  }
}