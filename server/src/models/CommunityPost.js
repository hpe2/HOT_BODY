const mongoose = require('mongoose');

const CommunityPostSchema = mongoose.Schema({
    writerId : {
        type: String,
        require: true
    },
    writername: {
        type: String,
    },
    membership: {
        type: Boolean,
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
    },
    likes: [String],
    tags: {
        type: String,
    },
    reply: [{
        userId: String,
        userName: String,
        text: String,
        createdAt: String,
    }]
}, {timestamps: true});

const CommunityPost = mongoose.model("CommunityPost", CommunityPostSchema);

module.exports = CommunityPost;