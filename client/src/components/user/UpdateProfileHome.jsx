import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useUserContext } from "../../context/AuthContext";
import { useUpdateUserAccount } from '../../Queries/queriesAndMutations';
import {toast} from 'react-toastify';

const UpdateProfileForm = ({ setIsEdit }) => {
  const navigate = useNavigate();
  const { user, checkAuthUser } = useUserContext();
  const { isPending, mutateAsync: updateUserAccount} = useUpdateUserAccount();

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email);
  const [userId, setUserId] = useState(user.userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {userId, name, email, password}
    const res = await updateUserAccount(userInfo);
    console.log(res)
    if(res.status === 200){
      toast.info('정보를 수정했습니다.');
      checkAuthUser();
      navigate('/');
    }else{
      if(res.response.data.message) return toast.info(res.response.data.message);
      else toast.info('정보 수정에 실패했습니다.');
    }
  };

  return (
    <form className="formField" onSubmit={handleSubmit}>
      <div className="inputNote">
        <span>아이디</span>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="inputNote">
        <span>이름</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="inputNote">
        <span>이메일</span>
        <input
          type="text"
          value={email}
          placeholder="새로운 이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inputNote">
        <span>기존 비밀번호</span>
        <input
          type="password"
          value={password}
          placeholder="변경 시 필수입력"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="ProfileEditButton"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          취소하기
        </button>
        <button
          type="submit"
          className="ProfileEditButton"
          disabled={!password}
        >
          {isPending ? 'Processing. . .': '수정하기'}
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
