import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowForward } from "react-icons/io";
import PtChat from './PtChat';

const PtTrainerInfo = ({image, trainer}) => {
  const {user} = useUserContext(); //
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const navigate = useNavigate();
  const toggleChatModal = () => {
    setModalOpen(!modalOpen);
  };


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
      {
      modalOpen &&
      <div className={'modal-container'} ref={modalBackground} onClick={(e) => {
        if (e.target === modalBackground.current) {
          setModalOpen(false);
        }
      }}>
        <div className={'modal-content'}>
            <PtChat isOpen={modalOpen} onClose={toggleChatModal} />
          </div>
        </div>
      }
    </div>
  )
}

export default PtTrainerInfo