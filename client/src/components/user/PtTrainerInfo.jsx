import React, { useState, useRef } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowForward } from "react-icons/io";

const PtTrainerInfo = ({image, trainer}) => {
  const {user} = useUserContext(); //
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (

    <div className="ptField">
        <>
        <div className='imageContainer'>
          <img src="" alt={image} className='ptImage'/>
        </div>
        <div className='ptStatus'>
          <h1>{trainer} 선생님</h1>

        </div>
        <div className='buttons' onClick={() => setModalOpen(true)}>
          <IoIosArrowForward />
        </div>
      </>
      {
      modalOpen &&
      <div className={'modal-container'} ref={modalBackground} onClick={(e) => {
        if (e.target === modalBackground.current) {
          setModalOpen(false);
        }
      }}>
        <div className={'modal-content'}>
          <div className='modal-boxContainer'>
            추진모임
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

export default PtTrainerInfo