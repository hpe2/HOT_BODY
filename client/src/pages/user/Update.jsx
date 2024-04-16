import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import Wrapper from "../../components/Wrapper";
import "../../style/update.scss";

const Update = () => {
  return (
    <Wrapper>
      <UserNavbar/>
      <div className="content">
        <div className="container">
          <div className="account">
            <h1>계정 정보</h1>
            <div className="boxContainer">
              <div className="idName">
                <strong>ID</strong><span>userId</span>
                <strong>이름</strong><span>홍길동</span>
              </div>
              <div className="formField">
                <label htmlFor="nickname">닉네임</label><input type="text" id="nickname"/>
                <label htmlFor="password">기존 비밀번호</label><input type="text" id="password"/>
                <label htmlFor="newPassword">신규 비밀번호</label><input type="text" id="newPassword"/>
                <label htmlFor="newPasswordCheck">신규 비밀번호(확인)</label><input type="text" id="newPasswordCheck"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};
//input 값을 입력할 때마다 실시간으로 유효성 검사를 실시한다.
/* const nicknameChangeUtil = (e) =>
onChangeNicknameHandler(e, setNickname, setNicknameError);

const nicknameSubmitHandler = () => {
if (!isEditing) {
  setIsEditing(true); // 연필 버튼을 클릭하면 edit모드를 true로
  return;
}
if (isEditing) {
  // nicknameCheck 함수는 별도의 파일에 있으므로 해당 함수를 호출한다.
  const result = nicknameCheckHandler(nickname, setNicknameError);
  if (result) { // 유효성 검사를 통과하면
    setNickname(nickname); // 로컬에 닉네임을 세팅하고
    setIsEditing(false); // edit모드를 종료한다.
  }
}
};

const Update = () => {
  return (
    <>
      <UserNavbar/>
        <div>
          {isEditing ? (
            <div>
              <input
                type='text'
                value={nickname}
                className='nicknameInput'
                // onChange 함수는 별도의 파일에 있어 해당 함수를 호출한다.
                onChange={nicknameChangeUtil}
                onBlur={blurHandler}
                />
              {nicknameError && <small>{nicknameError}</small>}
            </div>
          ) : (
            <span>{nickname || '닉네임'}</span> // false이면 span 태그 노출
          )}
          <button onMouseDown={nicknameSubmitHandler}>
            <img
              className='pencilButton'
              src={`${process.env.PUBLIC_URL}assets/svgs/pencil.svg`}
              alt='닉네임 바꾸기'
              />
          </button>
        </div>
    </>
  )
}; */

export default Update;
