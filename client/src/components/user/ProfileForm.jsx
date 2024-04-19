import React, { useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useUserContext } from '../../context/AuthContext';
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
const ProfileForm = ({setIsEdit}) => {
    const {user} = useUserContext();

    return (
    <form className="formField">
        <div className='inputNote id'>
            <span>아이디</span>
            <span className='inputContent'>{user.userId}</span>
        </div>
        <div className='inputNote name'>
            <span>이름(별명)</span>
            <span className='inputContent'>{user.name}</span>
        </div>
        <div className='inputNote email'>
            <span>이메일</span>
            <span className='inputContent'>{user.email}</span>
        </div>
        <div className='buttons'>
            <input type="button" value='수정하기' onClick={() => {setIsEdit(true)}}></input>
        </div>
    </form>
  )
}

export default ProfileForm