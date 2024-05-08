import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useUserContext } from "../../context/AuthContext";
import { useUpdateUserAccount } from '../../Queries/queriesAndMutations';
import {toast} from 'react-toastify';
import UserDataInput from './UserDataInput';

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

    if(res.status === 200){
      toast.info('정보를 수정했습니다.');
      checkAuthUser();
      navigate('/');
    }else{
      if(res.response.data.message) return toast.info(res.response.data.message);
      else toast.info('정보 수정에 실패했습니다.');
    }
  };

  // dataName, type, value, setState
  return (
    <form className="formField" onSubmit={handleSubmit}>
      <UserDataInput dataName='아이디' type='text' value={userId} setState={setUserId} />
      <UserDataInput dataName='이름' type='text' value={name} setState={setName} />
      <UserDataInput dataName='이메일' type='text' value={email} setState={setEmail} />
      <UserDataInput dataName='기존 비밀번호' type='password' value={password} setState={setPassword} />
      <div className="buttons">
        <button
          type="submit"
          className="ProfileEditButton"
          disabled={!password}
        >
          {isPending ? 'Processing. . .': '저장하기'}
        </button>
        <button
          type="button"
          className="ProfileEditButton cancle"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          취소하기
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
