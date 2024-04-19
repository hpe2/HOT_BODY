import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const UpdateProfileForm = ({setIsEdit}) => {
    const {user} = useUserContext();

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // API calling 
    }

  return (
    <form className="formField" onSubmit={handleSubmit}>
        <div className='inputNote id'>
          <span>ID</span>
          <span>{user.userId}</span>
        </div>
        <div className='inputNote name'>
          <span>이름</span>
          <input type="text" value={name} placeholder='' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='inputNote password'>
        <span>기존 비밀번호</span>
          <input type='password' value={password} placeholder='변경 시 필수입력' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='inputNote newPassword'>
          <span>신규 비밀번호</span>
          <input type="password" value={newPassword} placeholder='' onChange={(e) => setNewPassword(e.target.value)} />
          </div>
        <div className='inputNote confirmPassword'>
          <span>신규 비밀번호(확인)</span>
          <input type="password" value={confirmPassword} placeholder='' onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div className='buttons'>
          <input type="submit" value='저장하기' disabled={newPassword !== confirmPassword}/>
          <input type="button" value='취소' onClick={() => {setIsEdit(false)}}/>
        </div>
    </form>
  )
}

export default UpdateProfileForm