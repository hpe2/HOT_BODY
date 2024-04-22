import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import "../../style/user/pointroulette.scss";
import { useUserContext } from "../../context/AuthContext";
import Wheel from "../../components/user/Wheel";


const PointRulet = () => {
  const {user} = useUserContext();
  const [pointDetail, setPointDetail] = useState(false);
  /* const [loading , setLoading ] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])
   */
  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
  ]

  return (
    <>
      <div className="pointRouletteContent">
        <div className="container">
          <div className="pointRoulette">
            <h1 className="title">포인트 응모</h1>
            <div className="boxContainer">
              <div className="roulette">
                <Wheel />
                <div className="innerboxContainer">
                <div className='point'>
                  <span>현재 보유한 포인트</span>
                  <span className="value">{user.point}</span>
                </div>
                <div className='ticket'>
                  <span>보유 응모권</span>
                  <span className="value">user.point</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
};

export default PointRulet;