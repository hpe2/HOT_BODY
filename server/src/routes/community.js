const express = require("express");
const auth = require('../middleware/auth');
const CommunityPost = require('../models/CommunityPost');
const User = require('../models/User');
const router = express.Router();

// 글 불러오기
router.get('/getPosts', async (req, res) => {
  try{
    const {category} = req.query;
    if(category === "all"){
      const posts = await CommunityPost.find({}).limit(10).sort({createdAt: -1});
      return res.status(200).send(posts);
    }else if(category && category !== 'all'){
      const posts = await CommunityPost.find({category}).limit(10).sort({createdAt: -1});
      return res.status(200).send(posts);
    }

    return res.status(400).send({message: '글을 불러오는데 실패했습니다.'})
  }catch(err){
    return res.status(400).send({message: '글을 불러오는데 실패했습니다.'})
  }
})

// 특 정 글 상세 정보 불러오기 
router.get('/detail', async (req, res) => {
  try{
    const {id} = req.query;
    const post = await CommunityPost.find({_id: id});
    if(!post) return res.status(401).send({message: '해당되는 글이 없습니다.'});
    return res.status(200).send(post);
  }catch(err){
    return res.status(400).send({message: `글을 불러오는데 실패했습니다.`})
  }
})

// 새 글 작성
router.post('/createPost', auth, async (req, res) => {
  try{
    const commuintyInfo = {
      writerId: req.user._id,
      writername: req.user.name,
      membership: req.user.membership,
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
