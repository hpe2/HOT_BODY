const express = require("express");
const auth = require('../middleware/auth');
const CommunityPost = require('../models/CommunityPost');
const router = express.Router();

// 회원가입
router.post('/createPost', auth, async (req, res) => {
  try{
    const commuintyInfo = {
      writerId: req.user._id,
      writerName: req.user.name,
      title: req.body.title,
      text: req.body.text,
      image: req.body.image,
      category: req.body.category,
      tags: req.body.tags
    }
    const newPost = new CommunityPost(commuintyInfo);
    await newPost.save();
    return res.status(200);
  }catch(err){
    return res.status(400).send({message: `이미 사용 중인 이메일 입니다. ${err}`})
  }
})


module.exports = router;
