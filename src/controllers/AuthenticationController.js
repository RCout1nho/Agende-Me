const User = require('../models/User');

module.exports = {
  async auth(req, res) {
    const { email, password } = req.headers;

    const Auth = await User.find({ email, password });

    if (Auth.length > 0) {
      return res.json(Auth);
    }

    return res.json(null);
  }
}