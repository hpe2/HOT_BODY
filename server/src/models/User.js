const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    trim: true,
    require: true
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  userType: {
    type: String,
    default: 'general'
  },
  profileImg: {
    type: String,
  },
  membership: {
    type: Boolean,
    default: false
  },
  point: {
    type: Number,
    default: 0,
  },
  checkedToday: {
    type: Boolean,
    default: false,
  },
  join: {
    group: {
      type: [String],
      default: []
    },
    groupMeeting: {
      type: [String],
      default: []
    }
  },
  wrote: [String],
  personalInfo: {
    height: Number,
    weight: Number,
    age: Number,
    gender: String,
    phone: Number,
    purpose: String,
  },
  PTReservation: [{
    trainerId: String,
    date: String,
    time: String,
    price: String,
    trainerImg: String,
    trainerName: String,
    process: String
  }],
  trainerId: String,
  coupon: [{
    title: String,
    expire: Date,
    content: String
  }]
}, {timestamps: true});

// DB에 유저 정보를 저장하기 전 수행하는 트랜잭션. 유저가 입력한 비밀번호 해시화
userSchema.pre('save', async function(next){
  let user = this;

  // password값을 수정할 때만 로직 실행
  if(user.isModified('password')){
    // random salt 생성
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  }
  next();
});

userSchema.methods.comparePassword = async function(plainPassword){
  let user = this;

  // compare 메서드는 불리언 타입 반환 (비번 일치 여부 확인)
  const match = await bcrypt.compare(plainPassword, user.password);
  return match;
}


const User = mongoose.model("User", userSchema);

module.exports = User;