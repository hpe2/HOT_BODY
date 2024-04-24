const express = require("express");
const User = require("../models/User");
const Group = require("../models/Group");
const auth = require("../middleware/auth");
const router = express.Router();

// 새 그룹 생성
router.post("/createGroup", auth, async (req, res) => {
  try {
    let maxMember;
    if(req.user.membership){
      maxMember = 30
    }else maxMember = 10

    const groupData = {
      leaderId: req.user._id,
      leaderName: req.user.name,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      members: [req.user._id],
      memberLimit: maxMember,
      tags: req.body.tags
    }
    const group = new Group(groupData);
    await group.save();

    const user = await User.findOneAndUpdate(
      {_id: req.user._id},
      {$push: {"join.group" :group._id}},
      {new: true}
    );

    if(!user) throw Error;

    if(!group) throw Error;
    return res.status(200).send({message: '새로운 모임을 생성했습니다.'});
  } catch (err) {
    return res.status(400).send({message : '새로운 모임을 생성하는데 실패했습니다.'})
  }
});

// 그룹 리스트 불러오기
router.get('/getGroups', async (req, res) => {
  try{
    const {category} = req.query;
    if(category === "all"){
      const groups = await Group.find({}).limit(10).sort({createdAt: -1});
      return res.status(200).send(groups);
    }else if(category && category !== 'all'){
      const groups = await Group.find({category}).limit(10).sort({createdAt: -1});
      return res.status(200).send(groups);
    }

    return res.status(400).send({message: '그룹을 불러오는데 실패했습니다.'})
  }catch(err){
    return res.status(400).send({message: '그룹을 불러오는데 실패했습니다.'})
  }
})

module.exports = router;
