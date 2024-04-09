const express = require("express");

const router = express.Router();

// API 처리 작성 예시
router.post("/register", async (req, res) => {
  try {
    return res.status(200);
  } catch (err) {
    return err;
  }
});

module.exports = router;
