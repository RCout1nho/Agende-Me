const Company = require('../models/Company');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, address, contact, driveThru, password, serviceType, maxLot } = req.body;

    const company = await Company.create({
      name,
      address,
      contact,
      driveThru,
      password,
      serviceType,
      maxLot,
      photo: filename
    });

    return res.json(company);
  },

  async index(req, res) {
    const companies = await Company.find();
    return res.json(companies);
  }
}