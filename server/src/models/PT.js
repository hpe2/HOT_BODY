const mongoose = require('mongoose');

const PTSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  speciality: {
    type: String,
    trim: true,
  },
  certification : {
    type: String,
    trim: true
  },
  ptProfileImage: {
    type: String,
  },
  location: {
    address: String,
    lon: Number,
    lat: Number,
  },
  price: {
    type: Number,
    default: 0
  },
  ptProfileName : {
    type: String,
    require: true
  },
  description : {
    type: String
  },
  reviews: [{
    userId: String,
    userName: String,
    text: String,
  }],
  reservations: [{
    userId: mongoose.Schema.Types.ObjectId,
    userName: String,
    date: String,
    time: String,
    process: String
  }]
}, {timestamps: true});


const PT = mongoose.model("PT", PTSchema);

module.exports = PT;