const Booking = require('../models/Booking');

module.exports = {
  async show(req, res) {
    const { company_id } = req.headers;

    const bookings = await Booking.find({ company: company_id });

    return res.json(bookings);
  }
}