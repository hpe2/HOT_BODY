import axios from "../config/axios";


// 회원가입 요청
export const signUp = async (userInfo) => {
  try{
    const response = await axios.post('/api/auth/signup', userInfo);
    if(response.status !== 200) throw Error;
    return response.status;
  }catch(err){
    return err;
  }
}

// 로그인
export const signIn = async (userData) => {
  try{
    const response = await axios.post('/api/auth/signin', userData);
    if(response.status !== 200) throw Error;
    localStorage.setItem('accessToken', response.data.accessToken)
    return response.status;
  }catch(err){
    return err;
  }
}

// 현재 로그인 한 유저의 정보 불러오기
export const getCurrentUser = async (user) => {
  try {
    const response = await axios.get("/api/auth/");
    //  response.data 에는 유저 정보가 담겨 있습니다.
    return response.data;
  } catch (err) {
    return err.message;
  }
};
