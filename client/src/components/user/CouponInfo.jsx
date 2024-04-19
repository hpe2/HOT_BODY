import React, { Link,useRef, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useUserContext } from '../../context/AuthContext';

const PointInfo = () => {
    const {user} = useUserContext(); //PersonalInfo 필요
    const [coupon, setCoupon] = useState('');


  return (
    <div className="couponField">
      <div className='inputNote personalHeight'>
        <div className='inputContent'>user.coupon.image</div>
      </div>
      <div className='inputNote id'>
        <span>멤버십</span>
        <h1>무표 PT 1회권</h1>
      </div>
      <div className="purchase">
        <div>
          <span>핫바디 플러스</span>
          <span>coupon.date?</span>
        </div>
        <span><IoIosArrowForward /></span>
      </div>
    </div>
  )
}

export default PointInfo