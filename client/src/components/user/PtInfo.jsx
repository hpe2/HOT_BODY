import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const PtInfoUpdate = ({setPtEdit}) => {
    const {user} = useUserContext(); //PersonalInfo 필요

  return (
    <form className="formField">
      <div className='inputNote personalHeight'>
        <span>키</span>
        <span className='inputContent'>{user.personalInfo ? `${user.personalInfo.height} cm` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>체중</span>
        <span className='inputContent'>{user.personalInfo ? `${user.personalInfo.weigth} kg` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>나이</span>
        <span className='inputContent'>{user.personalInfo ? `${user.personalInfo.age} 살` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>성별</span>
        <span className='inputContent'>{user.personalInfo ? user.personalInfo.gender : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>번호</span>
        <span className='inputContent'>{user.personalInfo ? user.personalInfo.phone : '정보 없음'}</span>
      </div>
      <button className='ProfileEditButton' onClick={() => {setPtEdit(true)}}>수정하기</button>
    </form>
  )
}

export default PtInfoUpdate