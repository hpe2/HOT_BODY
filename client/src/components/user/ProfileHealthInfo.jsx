import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const purposeList = [
  {value: 'diet', text:'다이어트'},
  {value: 'bulk', text:'체중증가'},
  {value: 'muscle', text:'근력 강화(건강)'},
  {value: 'health', text:'체력'},
  {value: 'balance', text:'체형 교정'},
  {value: 'physicalCare', text:'재활/통증 케어'},
  {value: 'bodyProfile', text:'바프'},
  {value: 'competition', text:'대회 준비'},
]

const PtInfoUpdate = ({setPtEdit}) => {
  const {user} = useUserContext(); 

  const handlePurpose = (value) => {
    const purpose = purposeList.filter((list) => {
      return list.value === value
    })[0]
    return purpose.text;
  }
  
    return (
    <form className="formField">
      <div className='inputNote personalHeight'>
        <span>키</span>
        <span className='inputContent'>{user.personalInfo.height ? `${user.personalInfo.height} cm` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>체중</span>
        <span className='inputContent'>{user.personalInfo.weight ? `${user.personalInfo.weight} kg` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>나이</span>
        <span className='inputContent'>{user.personalInfo.age ? `${user.personalInfo.age} 살` : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>성별</span>
        <span className='inputContent'>{user.personalInfo.gender ? user.personalInfo.gender : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>연락처</span>
        <span className='inputContent'>{user.personalInfo.phone ? user.personalInfo.phone : '정보 없음'}</span>
      </div>
      <div className='inputNote'>
        <span>운동목적</span>
        <span className='inputContent'>{user.personalInfo.purpose ? handlePurpose(user.personalInfo.purpose) : '정보 없음'}</span>
      </div>
      <div className="buttons">
        <button className='PtEditButton' onClick={() => {setPtEdit(true)}}>수정하기</button>
      </div>
    </form>
  )
}

export default PtInfoUpdate