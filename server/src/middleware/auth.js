const jwt = require("jsonwebtoken");
const User = require("../models/User");

// let -> const (확인 필요)
const auth = async (req, res, next) => {
  // 토큰을 헤더에서 참조
  const authHeader = req.headers["authorization"];
  let token;
  if (authHeader) token = authHeader.split(" ")[1];
  else
    return res
      .status(401)
      .send({ message: "Not Authorized. 로그인 정보가 없습니다." });

  try {
    // try문 내부 : 헤더에 저장된 토큰이 유효한지 확인

    // 토큰을 복호화 해서 유저 id를 식별
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 식별된 유저 id에 해당되는 유저 정보를 DB의 User collection에서 찾아서 가져옴
    const user = await User.findOne({ _id: decoded.userObjId });
    if (!user) return res.status(401).send({ message: "Not Authorized. 로그인 정보가 없습니다." });
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = auth;
