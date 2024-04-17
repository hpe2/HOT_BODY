import React, { useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useUserContext } from '../../context/AuthContext';
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const UpdateProfileForm = ({setIsEdit}) => {
    const {user} = useUserContext();

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function sendBtnHandler(e) {
      setNick(inputRef.current.value);
      console.log("렌더링 완료");
  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // API calling 
    }

  return (
    <form className="formField" onSubmit={handleSubmit}>
        <div>ID</div><span>{user.userId}</span><p></p>
        <div>이름</div><input type="text" value={name} onChange={(e) => setName(e.target.value)}/><button onClick={sendBtnHandler}><MdOutlineEdit /></button>
        <div>기존 비밀번호</div><input id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><button><IoEyeOutline /></button>
        <div>신규 비밀번호</div><input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" id="newPassword"/><button><IoEyeOutline /></button>
        <div>신규 비밀번호(확인)</div><input type="password" id="newPasswordCheck" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><button><IoEyeOutline /></button>
        <input type="submit" value='수정하기' disabled={newPassword !== confirmPassword}/>
        <input type="button" value='취소' onClick={() => {setIsEdit(false)}}/>
    </form>
  )
}

export default UpdateProfileForm