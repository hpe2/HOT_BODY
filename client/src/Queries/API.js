import axios from "../config/axios";

// 회원가입 요청
export const signUp = async (userInfo) => {
  try {
    const response = await axios.post("/api/auth/signup", userInfo);
    if (response.status !== 200) throw Error;
    return response;
  } catch (err) {
    return err;
  }
};

// 로그인
export const signIn = async (userInfo) => {
  try {
    const response = await axios.post("/api/auth/signin", userInfo);
    if (response.status !== 200) throw Error;
    localStorage.setItem("accessToken", response.data.accessToken);
    return response;
  } catch (err) {
    return err;
  }
};

// 현재 로그인 한 유저의 정보 불러오기
export const getCurrentUser = async () => {
  try {
    const response = await axios.get("/api/auth/");
    //  response.data 에는 유저 정보가 담겨 있습니다.
    return response.data;
  } catch (err) {
    return err;
  }
};

// 카테고리 별 최신 글 가져오기
export const getCommunityPostsByCategory = async (category) => {
  try{
    const response = await axios.get(`/api/community/getPosts?category=${category}`);
    return response.data;
  }catch(err){
    return err;
  }
}

// 특정 글의 상세정보 가져오기
export const getCommunityPostDetail = async (id) => {
  try{
    const response = await axios.get(`/api/community/detail?id=${id}`)
    return response.data[0];
  }catch(err){
    return err.response;
  }
}

// 새 커뮤니티 글 작성
export const createCommunityPost = async (formData) => {
  try{
    const response = await axios.post("/api/community/createPost", formData);
    return response;
  }catch(err){
    return err;
  }
}

// 특정 유저가 쓴 글 가져오기
export const getCommunityPostByUser = async () => {
  try{
    const response = await axios.get('/api/user/wrote');
    return response;
  }catch(err){
    return err
  }
}

// 유저의 계정 정보 수정
export const updateUserAccount = async (userInfo) => {
  try{
    const response = await axios.post('/api/user/updateAccount', userInfo);
    return response
  }catch(err){
    return err;
  }
}

// 유저의 신체 정보 수정
export const updateUserBodyInfo = async (bodyInfo) => {
  try{
    const response = await axios.post('/api/user/updateBodyInfo', bodyInfo);
    return response
  }catch(err){
    return err;
  }
}

// 특정 글 좋아요 처리
export const likeCommunityPost = async (id) => {
  try{
    const response = await axios.post('/api/community/likePost', {id});
    return response;
  }catch(err){
    return err;
  }
}