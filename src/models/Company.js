const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  driveThru: Boolean,
  password: String,
  serviceType: String,
  maxLot: Number,
  photo: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

CompanySchema.virtual('photo_url').get(function () {
  return `http://localhost:3333/files/${this.photo}`
})

module.exports = mongoose.model('Company', CompanySchema);