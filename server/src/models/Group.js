const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    leaderId : {
        type: String,
    },
    leaderName: {
        type: String,
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    category: {
        type: String,
    },
    members: {
        type: [String]
    },
    meetings: [String],
    memberLimit: {
        type: Number,
        default: 10,
    },
    tags: {
        type: String,
    },
    chat: [{
        userId: String,
        userName: String,
        text: String,
        sendAt: String,
    }]
}, {timestamps: true});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;