import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowForward } from "react-icons/io";


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

const PtTrainerInfo = ({image,trainer}) => {
  const {user} = useUserContext(); //PersonalInfo 필요

  return (

    <div className="ptField">
      <div className='lowPtInnerContainer'>
        <div className='leftContainer'>
          <div className='imageContainer'>
            <img src={image} alt="trainer" className='ptImage'/>
          </div>
          <div className='ptTrainerStatus'>
            <h1>{trainer} 선생님</h1>
            <span className='detail' onClick={() => navigate(`/profile/pt/${trainer}`)}>프로필 상세보기 <IoIosArrowForward /></span>
          </div>
        </div>
        <div className='buttons' onClick={() => setModalOpen(true)}>
          <IoIosArrowForward />
        </div>
        </div>
    </div>
  )
}

export default PtTrainerInfo