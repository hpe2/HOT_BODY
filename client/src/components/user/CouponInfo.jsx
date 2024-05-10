import React, { Link,useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { useUserContext } from '../../context/AuthContext';
import CouponInfoDetail from './CouponInfoDetail';
import Logo from '/images/logo.png'

const PointInfo = () => {
  const {user} = useUserContext(); //PersonalInfo 필요
  const [coupon, setCoupon] = useState('');
  const [isAllVaild, setIsAllVaild] = useState(true);
  const CouponList = [
    {couponNumber: 1, publish: '멤버십', text:'무료 PT 1회권', per:'25-04-23까지', condition:'PT 1회 이상 구매시 적용 가능', notice:'상품 중복 할인쿠폰<br>- 상품 1개에 대해 사용 가능'},
  ]

  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

  return (
      <>
        {CouponList.map(detail => (
          <div className="boxContainer">
            <div className="couponField">
              <div className='coupon'>
                <div className='pointImage'>
                  <img src={Logo} alt="이미지" className='image'/>
                </div>
                <div className='couponName'>
                  <span>{detail.publish}</span>
                  <h1>{detail.text}</h1>
                </div>
                <div className='couponName'>
                  <span>유효기간</span>
                  <h1>{detail.per}</h1>
                </div>
              </div>
              <div className="checkPoint" onClick={PanelDrop}>
                <span>쿠폰 상세내역 조회</span> 
                <span>{isAllVaild === true ? <IoIosArrowDown />: <IoIosArrowUp />}</span>
              </div>
              <div className={`panel-coupon ${isAllVaild ? '' : 'dropdown'}`}>
                {isAllVaild === false ? (
                  CouponList.map((detail) => (<CouponInfoDetail detail={detail} />))
                ) : (
                  <p className='animateLoading'>적립내역이 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
  )
}

export default PointInfo