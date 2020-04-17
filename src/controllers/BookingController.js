const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { hour, date } = req.body;
    const { company } = req.params;

    const response = await Booking.create({
      date,
      hour,
      user,
      company
    });

    await response.populate('company').execPopulate();

    return res.json(response);
  },

  async index(req, res) {
    const response = await Booking.find();
    return res.json(response);
  },

  async show(req, res) {
    const { user } = req.params;

    const response = await Booking.find({ user }).populate('company').exec();

    return res.json(response);
  }
}