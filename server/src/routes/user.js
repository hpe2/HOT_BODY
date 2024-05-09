const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const CommunityPost = require('../models/CommunityPost')
const User = require("../models/User");
const Group = require("../models/Group");


// 유저가 쓴 글 불러오기
router.get("/wrote", auth, async (req, res) => {
  try {
    const posts = await CommunityPost.find({_id : { "$in" : req.user.wrote }}).sort({createdAt: -1});

    return res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send({ message: `글을 불러오는데 실패했습니다. 다시 시도해주세요. ${err}` });
  }
});

// 유저 계정 정보 수정
router.post("/updateAccount", auth, async (req, res) => {
  try{
    const user = await User.findOne({_id: req.user._id});
    const isMatch = await user.comparePassword(req.body.password);
    if(!isMatch) return res.status(400).send({message: '비밀번호가 일치하지 않습니다.'});
    const userInfo = {
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
    }
    const userData = await User.findOneAndUpdate({_id: req.user._id}, userInfo, {new: true});
    return res.status(200).send(userData)
  }catch(err){
    return res.status(400).send({ message: `유저 정보를 수정하는데 실패했습니다. 다시 시도해주세요. ${err}` });
  }
})

// 유저 신체 정보 수정
router.post("/updateBodyInfo", auth, async (req, res) => {
  try{
    const user = await User.findOneAndUpdate({_id: req.user._id}, {personalInfo: req.body}, {new: true});
    return res.status(200).send(user);
  }catch(err){
    return res.status(400).send({ message: `유저 정보를 수정하는데 실패했습니다. 다시 시도해주세요. ${err}` });
  }
})

router.get("/getAllGroups", auth, async (req, res) => {
  try{
    const groups = await Group.find(
      {_id: {$in : req.query.ids.split(',')}}
    )
    return res.status(200).send({message: `모임 조회에 성공했습니다.`, groups});
  }catch(err){
    return res.status(400).send({ message: `가입한 모임을 조회하는데 실패 했습니다. 다시 시도해주세요. ${err}`});
  }
})



module.exports = router;
