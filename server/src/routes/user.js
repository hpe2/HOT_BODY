const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const CommunityPost = require('../models/CommunityPost')
const User = require("../models/User");


// 유저가 쓴 글 불러오기
router.get("/wrote", auth, async (req, res) => {
  try {
    const posts = await CommunityPost.find({_id : { "$in" : req.user.wrote }}).sort({createdAt: -1});

    return res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send({ message: `글을 불러오는데 실패했습니다. 다시 시도해주세요. ${err}` });
  }
});

// 유저 정보 수정
router.post("/update", auth, async (req, res) => {
  try{
    console.log(req.body);
    // const user = await User.findOneAndUpdate({_id: req.user}, req.body)
    
    // const userData = { ...user._doc };
    // delete userData.password;

    // return res.status(200).send(userData)
  }catch(err){
    return res.status(400).send({ message: `글을 불러오는데 실패했습니다. 다시 시도해주세요. ${err}` });
   }
})

// 응모권 포인트 구매시 응모권 + 1, 포인트 차감

// personInfo 수정



module.exports = router;
