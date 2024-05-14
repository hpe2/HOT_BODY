const mongoose = require('mongoose');

const MeetingSchema = mongoose.Schema({
  joinMember: [String],
  date: String,
  location: String,
  time: String,
  tags: String
}, {timestamps: true});

const Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;