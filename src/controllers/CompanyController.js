const Company = require('../models/Company');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, address, contact, driveThru, password, serviceType, maxLot, available, haveImage, type } = req.body;

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
      type
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
  }
}