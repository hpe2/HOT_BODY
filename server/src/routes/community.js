const express = require("express");
const auth = require('../middleware/auth');
const CommunityPost = require('../models/CommunityPost');
const User = require('../models/User');
const router = express.Router();
const dayjs = require('dayjs');

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

// 특정 글 상세 정보 불러오기 
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

    // 유저의 작성 글 목록 업뎃과 point 적립
    await User.findOneAndUpdate(
      {_id: req.user._id},
      {$push : {wrote: newPost._id}, $inc: {point: 10}},
      {new: true}
    )

    return res.status(200).send({message: "성공적으로 작성했습니다."});
  }catch(err){
    return res.status(400).send({message: `새로운 글을 작성하는데 실패했습니다. ${err}`})
  }
})

// 작성한 글 수정
router.post('/editPost', auth, async (req, res) => {
  try{
    const editedData = {
      title: req.body.title,
      text: req.body.text,
      image: req.body.image,
      category: req.body.category,
      tags: req.body.tags
    }
    const editedPost = await CommunityPost.findOneAndUpdate(
      {_id: req.query.id},
      {$set : editedData},
      {new: true}
    )
    return res.status(200).send({message: '성공적으로 글을 수정했습니다.'});
  }catch(err){
    return res.status(400).send({message: `글을 수정하는데 실패했습니다. ${err}`}) 
  }
})

// 글 삭제
router.delete('/deletePost', auth, async (req, res) => {
  try{
    const post = await CommunityPost.deleteOne({_id: req.query.id});
    if(!post) return res.status(401).send({message: '해당 글이 존재하지 않습니다.'});
    return res.status(200).send({message: '글을 성공적으로 삭제했습니다.'});
  }catch(err){
    return res.status(400).send({message: `글을 삭제하는데 실패했습니다. ${err}`})
  }
})

// 특정 글 좋아요 처리
router.post('/likePost', auth, async (req, res) => {
  try{
    const {id} = req.body
    const post = await CommunityPost.findOne({_id: id});

    if(!post) return res.status(401).send({message: `좋아요 할 수 없는 글입니다.`});
    
    // 이미 해당 글에 좋아요를 눌렀는지 확인
    let duplicate = false;
    post.likes.forEach(userId => {
      if(userId == req.user._id) {
        duplicate = true;
        return; // 
      }
    })

    // 이미 좋아요를 누른 경우, 좋아요 취소
    if(duplicate){
      const newPost = await CommunityPost.findOneAndUpdate(
        {_id: id}, 
        {$pull: { likes : req.user._id}},
        {new: true}
      )
      
      return res.status(200).send({newPost, message: '좋아요를 취소하셨습니다.' })
    }

    const newPost = await CommunityPost.findOneAndUpdate(
      {_id: id},
      {$push: {likes : req.user._id}},
      {new: true}
    )

    return res.status(200).send({newPost, message: '좋아요를 누르셨습니다.'})
  }catch(err){
    return res.status(400).send({message: `좋아요 처리에 실패했습니다. ${err}`})
  }
})

// 댓글 작성
router.post('/replyPost', auth, async(req, res) => {
  try{
    const {postId, text} = req.body;
    const date = dayjs();
    const replyData = {
      userId: req.user._id,
      userName: req.user.name,
      text,
      createdAt: date.format(),
    }

    const post = await CommunityPost.findOneAndUpdate(
      {_id: postId},
      {$push : {reply: replyData}},
      {new: true}
    )

    return res.status(200).send({post, message: '댓글을 성공적으로 달았습니다.'})
  }catch(err){
    return res.status(400).send({message: '글을 삭제하는데 실패했습니다.'});
  }
})

// 댓글 삭제
router.post('/deleteReply', auth, async(req, res) => {
  try{
    const {postId, replyId} = req.body;
    const post = await CommunityPost.findOneAndUpdate(
      {_id: postId},
      {$pull : {reply: {_id: replyId}}},
      {new: true}
    )
    return res.status(200).send({message: '댓글을 삭제했습니다.'});
  }catch(err){
    return res.status(400).send({message: `댓글 삭제에 실패했습니다. ${err}`})
  }
})


module.exports = router;
