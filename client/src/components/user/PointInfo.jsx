import React, { Link, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowForward } from "react-icons/io";

const PointInfo = () => {
    const {user} = useUserContext(); //
    const [point, setPoint] = useState(user.point);
    const [ticket, setTicket] = useState(0);

    function entryTicket(e){
      point === 0 ? alert('포인트가 부족합니다.') : setPoint(-1), setTicket(+1), alert('응모가 완료됐습니다');
  }

  return (
    <div className="pointField">
      <div className='point_image'>
        <img src="" alt="내 포인트"></img>
      </div>
      <div className='point_status'>
        <span>현재 보유한 포인트</span>
        <h1>{user.point}</h1>
      </div>
      <div className='point_buttons'>
        <button onClick={entryTicket}>응모권 구매</button>
        <button>구매 내역</button>
      </div>
      <button className="purchase">
        <span>포인트 이용내역 조회</span> 
        <span><IoIosArrowForward /></span>
      </button>
    </div>
  )
}

export default PointInfo