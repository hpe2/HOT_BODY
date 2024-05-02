import React from 'react'
import { useUserContext } from '../../context/AuthContext';
const ProfileForm = ({setIsEdit}) => {
    const {user} = useUserContext();

    return (
    <form className="formField">
        <div className='inputNote id'>
            <span>식별번호 (unique ID)</span>
            <span className='inputContent'>{user._id}</span>
        </div>
        <div className='inputNote name'>
            <span>이름 (username)</span>
            <span className='inputContent'>{user.name}</span>
        </div>
        <div className='inputNote email'>
            <span>이메일 (email)</span>
            <span className='inputContent'>{user.email}</span>
        </div>
        <div className="buttons">
            <button type="button" className='ProfileEditButton' onClick={() => {setIsEdit(true)}}>수정하기</button>
        </div>
    </form>
  )
}

export default ProfileForm