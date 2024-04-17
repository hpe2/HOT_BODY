const mongoose = require('mongoose');

const CommunityPostSchema = mongoose.Schema({
    writerId : {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    image: {type: String},
    category: {
        type: String,
    },
    likes: {
        type: [String],
        default: []
    },
    tags: {
        type: String,
    },
    reply: [{
        userId: String,
        text: String,
        createdAt: String,
    }]
}, {timestamps: true});

const CommunityPost = mongoose.model("CommunityPost", CommunityPostSchema);

module.exports = CommunityPost;