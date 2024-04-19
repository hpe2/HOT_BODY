import React from "react";
import UserNavbar from "../../components/user/UserNavbar";
import "../../style/user/wrote.scss";
import { useUserContext } from "../../context/AuthContext";


/* const [newNick, setNewNick] = useState();*/

const Wrote = () => {
  const {user} = useUserContext();
  return (
    <>
      <UserNavbar/>
      <div className="content">
        <div className="container">
          <div className="wrote">
            <h1>내가 쓴 글</h1>
            <div className="boxContainer">
              <div className="wroteField">
                <table>
                  <thead>
                    <tr>
                      <th className="cate">카테고리</th>
                      <th className="title">제목</th>
                      <th className="date">날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {user.map((content) => (
                      <tr>
                        <td>{content.name}</td>
                        <td>{content.userid}</td>
                        <td>{content.email}</td>
                      </tr>
                    ))} */}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                    </tr>
                  </tfoot>
                  <tr>
                    {/* {user.map(() => {
                    <td>{user.wrote}</td>
                    <td>{user.wrote}</td>
                    <td>{user.wrote}</td>
                  })} */}
                  </tr>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
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

const Wrote = () => {
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

export default Wrote;
