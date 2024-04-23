import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import UserMemberPurchaseList from './UserMemberPurchaseList';



const PointInfo = () => {
  const {user} = useUserContext(); //
  const [point, setPoint] = useState(user.point);
  const [ticket, setTicket] = useState(0);
  const [isAllVaild, setIsAllVaild] = useState(true);
  const PointList = [
    {date: '2024/04/23', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/22', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/21', text:'출석체크 포인트', price:'+ 1p'},
    {date: '2024/04/19', text:'출석체크 포인트', price:'+ 1p'},
  ]

  function entryTicket(e){
    point === 0 ? alert('포인트가 부족합니다.') : setPoint(-1), setTicket(+1), alert('응모가 완료됐습니다');
  }
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
        <Link to='roulette' className="RouletteButton">응모하기</Link>
      </div>
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