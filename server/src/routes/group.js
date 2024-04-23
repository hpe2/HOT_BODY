const express = require("express");
const User = require("../models/User");
const Group = require("../models/Group");
const auth = require("../middleware/auth");
const router = express.Router();

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
    if(!group) throw Error;
    return res.status(200).send({message: '새로운 모임을 생성했습니다.'});
  } catch (err) {
    return res.status(400).send({message : '새로운 모임을 생성하는데 실패했습니다.'})
  }
});

module.exports = router;
