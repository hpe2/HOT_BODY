import axios from "../config/axios";

// API 작성 예시 - 회원가입
export const createUserAccount = async (user) => {
  try {
    // API 호출
    const response = await axios.post("/api/auth/signup", user);
    // 200 응답값 아니면 에러로 간주하고 catch문 내부 코드 실행
    if (response.status !== 200) throw Error;
    // 성공
    return response.status;
  } catch (err) {
    return err.message;
  }
};

// API 작성 예시 - 현재 로그인 한 유저의 정보 불러오기
export const getCurrentUser = async (user) => {
  try {
    const response = await axios.get("/api/getCurrent");
    //  response.data 에는 유저 정보가 담겨 있습니다.
    return response.data;
  } catch (err) {
    return err.message;
  }
};
