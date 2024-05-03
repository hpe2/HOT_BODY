const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth");
const communityRouter = require('./routes/community');
const userRouter = require('./routes/user');
const groupRouter = require('./routes/group');
const ptRouter = require('./routes/pt');

const PORT = 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`MongoDB is connected`))
  .catch((err) => console.error(err));


app.use("/api/auth", authRouter);
app.use('/api/community', communityRouter);
app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);
app.use('/api/pt', ptRouter);

// 서버 에러 처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send(err.message || { message: "Internet server error" });
});

app.listen(3000, () => console.log(`Server is running on PORT : ${PORT}`));
