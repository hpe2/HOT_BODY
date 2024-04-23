import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import UserMemberPurchaseList from './UserMemberPurchaseList';
import Wheel from './Wheel';




const PointInfo = () => {
  const {user} = useUserContext(); //
  const [isAllVaild, setIsAllVaild] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const PointList = [
    {date: '2024/04/23', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/22', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/21', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/19', text:'출석체크 포인트', price:'+ 1p'},
  ]

  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

  return (
    <>
    <div className="pointField">
      <div className='point'>
        <img src="" alt="이미지" className='pointImage'/>
        <div className='pointStatus'>
          <span>현재 보유한 포인트</span>
          <h1>{user.point}</h1>
        </div>
        <div className='buttons'>
          <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
            응모하기
          </button>
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
              <Wheel />
            </div>
            <div className='data'>
              <div className='modal-inner-boxContainer'>
                현재 보유 포인트
                {user.point}
              </div>
              <div className='modal-inner-boxContainer'>
                {user.point}
              </div>
              <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                모달 닫기
              </button>
            </div>
          </div>
        </div>
      }
      </div>
      <div className="checkPoint" onClick={PanelDrop}>
        <span>포인트 이용내역 조회</span> 
        <span>{isAllVaild === true ? <IoIosArrowDown />: <IoIosArrowUp />}</span>
      </div>
      <div className={`panel-checkPoint ${isAllVaild ? '' : 'dropdown'}`}>
          {user.point > 0 ? (
          PointList.map((purchase) => (<UserMemberPurchaseList purchase={purchase} />))
        ) : (
          <p className='animateLoading'>적립내역이 없습니다.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default PointInfo