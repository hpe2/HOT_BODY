const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const router = express.Router();

// 인증된 유저 정보 get
router.get("/", auth, async (req, res) => {
  return res.json({
    _id: req.user._id,
    userId: req.user.userId,
    name: req.user.name,
    email: req.user.email,
    userType: req.user.userType,
    membership: req.user.membership,
    point: req.user.point,
    checkedToday: req.user.checkedToday,
    join: req.user.join,
    PTReservation: req.user.PTReservation,
    coupon: req.user.coupon,
    createdAt: req.user.createdAt,
    personalInfo: req.user.personalInfo,
    trainerId: req.user.trainerId
  });
});

// 회원가입
router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).send({ message: "회원가입에 성공하셨습니다." });
  } catch (err) {
    return res
      .status(400)
      .send({ message: `이미 사용 중인 이메일 입니다. ${err}` });
  }
});

// 로그인
router.post("/signin", async (req, res) => {
  try {
    // 아이디 존재 여부 확인
    const user = await User.findOne({ userId: req.body.userId });
    if (!user)
      return res
        .status(400)
        .send({ message: "해당 아이디로 가입한 유저가 없습니다." });

    // 비밀번호 확인
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch)
      return res
        .status(400)
        .send({ message: "비밀번호가 일치하지 않습니다. 다시 입력해주세요." });

    // objectId 타입을 string 타입으로 변경
    const payload = { userObjId: user._id.toHexString() };

    // 토큰 생성, 토큰은 24시간 동안 유효
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // 응답 값으로 보낼 유저 정보에서 비밀번호는 제외
    const userData = { ...user._doc };
    delete userData.password;

    return res.status(200).send({ userData, accessToken, message: "로그인에 성공했습니다." });
  } catch (err) {
    return res
      .status(400)
      .send({ message: `로그인에 실패 했습니다. 다시 시도해주세요. ${err}` });
  }
});

module.exports = router;
