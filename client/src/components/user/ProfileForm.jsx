import React, { useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useUserContext } from '../../context/AuthContext';
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
const ProfileForm = ({setIsEdit}) => {
    const {user} = useUserContext();

    return (
    <form className="formField">
        <div className='idInput'>
            ID
            <span>{user.userId}</span>
        </div>
        <div className='nameInput'>
            name
            <span>{user.name}</span>
        </div>
        <div className='emailInput'>
            이메일
            <span>{user.email}</span>
        </div>
        <button onClick={() => {setIsEdit(true)}}>Edit</button>
    </form>
  )
}

export default ProfileForm