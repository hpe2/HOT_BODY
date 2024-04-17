import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import "../../style/profile.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useUserContext } from "../../context/AuthContext";
import ProfileForm from "../../components/user/ProfileForm";
import UpdateProfileForm from "../../components/user/UpdateProfileHome";

const Profile = () => {
  const {user} = useUserContext();
  console.log(user);

  // const [nick, setNick] = useState(user.name);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <UserNavbar/>
      <div className="content">
          Welcome <strong>{user.name}</strong> 님!
          <button
            className="button"
          >
            <h4>출석체크</h4> <p>+ 1 point</p>
          </button>
        <div className="container">
          <div className="account">
            <h1>계정</h1>
            <div className="boxContainer">
              {isEdit ? <UpdateProfileForm setIsEdit={setIsEdit} /> : <ProfileForm setIsEdit={setIsEdit} />}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="membership">
            <h1>멤버십</h1>
            <div className="boxContainer">
              <div className="formField">
                <span>
                  <label htmlFor="membership">Hot Body+</label>
                  <span>{user.membership ? "구독중" : "미구독"}</span>
                </span>
                <Link to="/profile/update/purchase" className="purchase"><label htmlFor="purchase">결제 내역</label><button><IoIosArrowForward /></button></Link>
              </div>
            </div>
            <Link to="/membership" className="link"><button className="mebershipBtn">구독하기</button></Link>
          </div>
        </div>
        <div className="container">
          <div className="counsel">
            <h1>상담 <small>*PT상담신청시에 필요한 정보입니다.</small></h1>
            <div className="boxContainer">
              <form className="formField" >
                <label htmlFor="height">키</label><input type="number" id="height"/>
                <label htmlFor="weight">체중</label><input type="number" id="weight"/>
                <label htmlFor="age">나이</label><input type="number" id="age"/>
                <label htmlFor="gender">성별</label><select id="gender">
                  <option value="man">남자</option>
                  <option value="woman">여자</option>
                </select>
                <label htmlFor="phone">번호</label><input type="number" id="phone" placeholder="연락처를 입력하세요(000-0000-0000 형식)"/>
                <label htmlFor="purpose">운동목적</label><select id="purpose">
                  <option value="diet">다이어트</option>
                  <option value="bulk">체중증가</option>
                  <option value="diet">근력 강화(건강)</option>
                  <option value="bulk">체력</option>
                  <option value="diet">체형 교정</option>
                  <option value="bulk">재활/통증 케어</option>
                  <option value="diet">바프</option>
                  <option value="bulk">대회 준비</option>
                </select>
                <div></div><input type="submit" value='수정하기'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


/* const [newPassword, setNewPassword] = useState();
  function changeHandler(e) {setNick(e.target.value);}
  function submitHandler(e){
    input.value !== (`${user.password}`) ? alert('retry') : field. setNewPassword(e.target.value);
    e.preventDefault()
    newPassword: '',
    newPasswordConfsirm: '',
    password: '',
  });

  const inputFields = [
    { label: '기존 비밀번호', name: 'password' },
    { label: '새로운 비밀번호', name: 'newPassword' },
    { label: '새로운 비밀번호 확인', name: 'newPasswordConfirm' },
  ];

  const [hide, setHide] = useState<Array<boolean>>(inputFields.map(() => true));
 // [ true, true, true ]
 */
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

export default Profile;
