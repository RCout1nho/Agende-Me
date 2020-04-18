const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    burgh: String,
    city: String,
    UF: String,
    num: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  contact: String,
  driveThru: Boolean,
  password: String,
  maxLot: Number,
  photo: String,
  available: Boolean,
  haveImage: Boolean,
  type: String,
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
  return `http://192.168.0.10:3333/files/${this.photo}`
})

module.exports = mongoose.model('Company', CompanySchema);