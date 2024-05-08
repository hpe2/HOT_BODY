import React, { useState, useRef } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const PtReservation = ({ image, trainer, At, time, location, text, price }) => {
  const [isAllVaild, setIsAllVaild] = useState(true);
  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

  return (

    <div className="ptField">
      <div className='ptInnerContainer'>
        <div className='imageContainer'>
          <img src={image} alt='trainer' className='ptImage'/>
        </div>
        <div className='ptStatus'>
          <h2 className='trainerName'>{trainer} 선생님</h2>
          <span>{location}</span>
          <span>{At}<br/>{time}</span>
        </div>
      </div>
      <div className="checkPoint" onClick={PanelDrop}>
        <span>상세내용보기</span>
        <span>{isAllVaild === true ? <IoIosArrowDown />: <IoIosArrowUp />}</span>
      </div>
      <div className={`panel-checkPoint ${isAllVaild ? '' : 'dropdown'}`}>
        <h3>프로그램 명: {text > 40 ? `${text.slice(0, 40)}...` : text}</h3>
        <h3>가격: {price}</h3>
      </div>
    </div>
  )
}

export default PtReservation