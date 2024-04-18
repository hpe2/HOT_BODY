const express = require("express");
const auth = require('../middleware/auth');
const CommunityPost = require('../models/CommunityPost');
const User = require('../models/User');
const router = express.Router();

// 새 글 작성
router.post('/createPost', auth, async (req, res) => {
  try{
    const commuintyInfo = {
      writerId: req.user._id,
      title: req.body.title,
      text: req.body.text,
      image: req.body.image,
      category: req.body.category,
      tags: req.body.tags
    }
    const newPost = new CommunityPost(commuintyInfo);
    await newPost.save();
    if(!newPost) throw Error;

    const user = await User.findOne({_id: req.user._id});

    if(!user) return res.status(401).send({message: '로그인 정보가 없습니다.'});

    await User.findOneAndUpdate(
      {_id: req.user._id},
      {$push : {wrote: newPost._id}},
      {new: true}
    )


    return res.status(200).send({message: "성공적으로 작성했습니다."});
  }catch(err){
    return res.status(400).send({message: `새로운 글을 작성하는데 실패했습니다. ${err}`})
  }
})


module.exports = router;
