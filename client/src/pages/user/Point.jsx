import React, { Link, useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import "../../style/point.scss";
import { useUserContext } from "../../context/AuthContext";
import PointInfo from "../../components/user/PointInfo";
import CouponInfo from "../../components/user/CouponInfo";


const Point = () => {
  const {user} = useUserContext();
  const [pointDetail, setPointDetail] = useState(false);

  return (
    <>
      <UserNavbar/>
      <div className="content">
        <div className="container">
          <div className="point">
            <h1>포인트</h1>
            <div className="boxContainer">
              <PointInfo/>
              {/* {pointDetail ? <PointInfo setPointDetail={setPointDetail} /> : <PointInfo setPointDetail={setPointDetail} />} */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="coupon">
            <h1>쿠폰</h1>
            <div className="boxContainer">
              <CouponInfo/>
            </div>
            {/* <Link to="/membership" className="link"><button className="mebershipBtn">구독하기</button></Link> */}
          </div>
        </div>
      </div>
    </>
  )
};

export default Point;