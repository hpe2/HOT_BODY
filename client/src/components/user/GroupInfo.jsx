import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowForward } from "react-icons/io";

const GroupInfo = ({image, title, location, member, meeting}) => {
  const {user} = useUserContext(); //
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const navigate = useNavigate();

  return (

    <div className="groupField">
      <div className='groupTitle'>
        <div className='imageContainer'>
          <img src={image} alt="이미지" className='groupImage'/>
        </div>
        <div className='groupStatus'>
          <h1>{title}</h1>
          <span>{location} &nbsp;&nbsp; 멤버 {member}</span>
        </div>
      </div>
      <div className='buttons'>
      <div className='groupArrow' onClick={() => navigate(`/profile/group/${title}`)}>
        <IoIosArrowForward />
      </div>
      </div>
      {
      modalOpen &&
      <div className={'modal-container'} ref={modalBackground} onClick={(e) => {
        if (e.target === modalBackground.current) {
          setModalOpen(false);
        }
      }}>
        <div className={'modal-content'}>
          <div className='modal-boxContainer'>
            추진모임 {GroupList.meeting}
          </div>
            <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
              모달 닫기
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default GroupInfo