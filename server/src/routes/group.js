const express = require("express");
const User = require("../models/User");
const Group = require("../models/Group");
const auth = require("../middleware/auth");
const router = express.Router();

// 새 모임 생성
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

// 모임 리스트 불러오기
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

// 특정 모임 정보 불러오기
router.get('/detail', async (req, res) => {
  try{
    const {id} = req.query;
    const group = await Group.findOne({_id: id});
    if(!group) return res.status(401).send({message: '존재하지 않는 모임입니다.'});
    return res.status(200).send(group);
  }catch(err){
    return res.status(400).send({message: '모임을 불러오는데 실패했습니다.'})
  }
})

// 모임 참여
router.post('/join', auth, async (req, res) => {
  try{
    const {groupId} = req.body;
    const group = await Group.findOne({_id: groupId});
    if(!group) return res.status(401).send({message: '존재하지 않는 모임입니다.'});

    // 모임이 정원인 경우
    if(group.members.length == group.memberLimit){
      return res.status(401).send({message: '이미 정원입니다. 다른 모임을 찾아보세요.'});
    }

    // 이미 모임에 가입한 유저인지 확인
    let duplicate = false;
    await group.members.forEach(memberId => {
      if(memberId == req.user._id){
        duplicate = true;
      }
    })

    if(duplicate) return res.status(401).send({message: '이미 가입한 모임입니다.'});
    
    const updatedGroup = await Group.findOneAndUpdate(
      {_id: groupId},
      {$push : {members: req.user._id}},
      {new: true}
    )
    return res.status(200).send({updatedGroup, message: '성공적으로 가입했습니다.'});
  }catch(err){
    return res.status(400).send({message: '모임에 가입하는데 실패했습니다.'})
  }
})

module.exports = router;
