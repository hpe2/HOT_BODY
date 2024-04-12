const express = require("express");
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const router = express.Router();

// 회원가입
router.post('/signup', async (req, res) => {
  try{
    const user = new User(req.body);
    await user.save();
    return res.status(200);
    // return res.status(200);
  }catch(err){
    return res.status(400).send({message: `이미 사용 중인 이메일 입니다. ${err}`})
  }
})

// 로그인
router.post('/signin', async (req, res) => {
  try{
    // 아이디 존재 여부 확인
    const user = await User.findOne({userId: req.body.userId});
    if(!user) return res.status(400).send({message: "해당 아이디로 가입한 유저가 없습니다."});

    // 비밀번호 확인
    const isMatch = await user.comparePassword(req.body.password);
    if(!isMatch) return res.status(400).send({message: "비밀번호가 일치하지 않습니다. 다시 입력해주세요."});

    // objectId 타입을 string 타입으로 변경
    const payload = { userObjId: user._id.toHexString() }

    // 토큰 생성, 토큰은 24시간 동안 유효
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '24h'});

    // 응답 값으로 보낼 유저 정보에서 비밀번호는 제외
    const userData = {...user._doc}
    delete userData.password;
    
    return res.status(200).send({userData, accessToken});
  }catch(err){
    return res.status(400).send({message: `로그인에 실패 했습니다. 다시 시도해주세요. ${err}`});
  }
})


module.exports = router;
