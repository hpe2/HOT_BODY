import React, { useState, useRef } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import UserMemberPurchaseList from './UserMemberPurchaseList';
import UserGroupList from './UserGroupList';




const GroupInfo = () => {
  const {user} = useUserContext(); //
  const [isAllVaild, setIsAllVaild] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const GroupList = [
    {title: '풋살모임👍⚽', type:'join', location:'전국', member:'149', meeting:'4'},
    {title: '배드민턴 동호회🏸', type:'join', location:'전국', member:'149', meeting:'4'},
    {title: 'HPE모임', type:'join', location:'강남', member:'4', meeting:'0'},
    {title: '운동같이 합시다', type:'mine', location:'강서', member:'1', meeting:'0'},
  ]

  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

  return (

    <div className="groupField">
      {GroupList.map((groups) => (
        /* {GroupList.type === 'join' ?} */
        <>
        <img src="" alt="이미지" className='groupImage'/>
        <div className='groupStatus'>
          <span>{groups.title}</span>
          <h1>{groups.location} 멤버{groups.member}</h1>
        </div>
        <div className='buttons'>
          <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
            추진모임<br/>
            {groups.meeting}
          </button>
        </div>
      </>
      ))}
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