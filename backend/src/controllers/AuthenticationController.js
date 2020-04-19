const User = require('../models/User');
const Company = require('../models/Company');

module.exports = {
  async userAuth(req, res) {
    const { email, password } = req.headers;

    const Auth = await User.find({ email, password });

    if (Auth.length > 0) {
      return res.json(Auth);
    }

    return res.json(null);
  },

  async companyAuth(req, res) {
    const { email, password } = req.headers;

    const Auth = await Company.find({ email, password });

    if (Auth.length > 0) {
      return res.json(Auth);
    }

    return res.json(null);
  }
}