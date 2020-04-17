const Company = require('../models/Company');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, contact, driveThru, password, serviceType, maxLot, available, haveImage, type,
      city, UF, burgh, street, num
    } = req.body;

    const address = {
      city,
      UF,
      burgh,
      street,
      num
    };

    const company = await Company.create({
      name,
      address,
      contact,
      driveThru,
      password,
      serviceType,
      maxLot,
      photo: filename,
      available,
      haveImage,
      type,
    });

    return res.json(company);
  },

  async index(req, res) {
    const companies = await Company.find();
    return res.json(companies);
  },

  async show(req, res) {
    const { type } = req.params;

    const result = await Company.find({ type });

    return res.json(result);
  },

  async total(req, res) {
    const bank = await Company.find({ type: 'bank' });
    const supermarket = await Company.find({ type: 'supermarket' });
    const restaurant = await Company.find({ type: 'restaurant' });
    const fastFood = await Company.find({ type: 'fast-food' });

    const response = {
      bank: bank.length,
      supermarket: supermarket.length,
      restaurant: restaurant.length,
      fastfood: fastFood.length
    }

    return res.json(response);
  },

  async getById(req, res) {
    const { _id } = req.params;
    const response = await Company.findById(_id);

    return res.json(response);
  }
}