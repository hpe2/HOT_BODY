import React, { useState, useRef } from 'react'
import { useUserContext } from '../../context/AuthContext';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const PtReservation = ({ image,trainer, At, time, location, text, price }) => {
  const [isAllVaild, setIsAllVaild] = useState(true);
  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

  return (

    <div className="ptField">
      <div className='imageContainer'>
        <img src="" alt={image} className='ptImage'/>
      </div>
      <div className='ptStatus'>
        <h1>{trainer} 선생님</h1>
        <span>{location}</span>
        <span>{At}<br/>{time}</span>
      </div>
        <div className="checkPoint" onClick={PanelDrop}>
          <span>{isAllVaild === true ? <IoIosArrowDown />: <IoIosArrowUp />}</span>
        </div>
      <div className={`panel-checkPoint ${isAllVaild ? '' : 'dropdown'}`}>
        <tr>
          <td>{text > 40 ? `${text.slice(0, 40)}...` : text}</td>
          <td>{price}</td>
        </tr>
      </div>
    </div>
  )
}

export default PtReservation