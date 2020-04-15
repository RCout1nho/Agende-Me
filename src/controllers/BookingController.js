const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { company_id } = req.params;
    const { date, init_hour } = req.body;

    const booking = await Booking.create({
      user: user_id,
      company: company_id,
      init_hour,
      date
    });

    await booking.populate('company').populate('user').execPopulate();

    return res.json(booking);
  }
}