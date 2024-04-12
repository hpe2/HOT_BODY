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
    return res.status(200).send(user);
    // return res.status(200);
  }catch(err){
    console.log(err);
    return res.status(400).send({message: `이미 사용 중인 이메일 입니다. ${err}`})
  }
})


module.exports = router;
