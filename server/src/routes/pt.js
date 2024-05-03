const express = require("express");
const auth = require('../middleware/auth');
const router = express.Router();
const PT = require('../models/PT');
const User = require('../models/User');

router.post('/register', auth, async (req, res) => {
  try{
    const user = await User.findOne({_id: req.user._id});
    if(user.userType === 'trainer'){
      return res.status(400).send({message: '이미 트레이너로 등록되어 있습니다.'})
    }

    const ptInfo = {
      userId: req.body.userId,
      speciality: req.body.speciality,
      certification: req.body.certification,
      ptProfileImage: req.body.ptProfileImage,
      ptProfileName: req.body.ptProfileName,
      location: req.body.location,
      price: req.body.price,
      description: req.body.description,
      reviews: [],
      reservations: []
    }

    const newPT = new PT(ptInfo);
    await newPT.save();
    if(!newPT) throw Error;

    const updatedUser = await User.findOneAndUpdate(
      {_id: req.user._id},
      {$set: {userType: 'trainer'}},
      {new: true}
    )

    if(!updatedUser) throw Error;

    return res.status(200).send({message: '성공적으로 등록 했습니다.'})
  }catch(err){
    return res.status(400).send({message: '트레이너 등록에 실패했습니다.'})

  }
})

// 트레이너 상세 정보 불러오기
router.get('/getDetail', async (req, res) => {
  try{
   const {id} = req.query;
   const trainer = await PT.findOne({_id: id});
   if(!trainer) throw Error;

   return res.status(200).send(trainer);
  }catch(err){
    return res.status(400).send({message: '트레이너 정보를 불러오는데 실패했습니다.'})
  }
})

module.exports = router;